---
title: "DB Indexes: A Misconception Story"
date: "2026-10-01T05:30:00Z"
description: "Why adding an index does not guarantee a faster query, and how PostgreSQL access patterns, selectivity, and execution plans changed my mental model."
tags: ["PostgreSQL", "Databases", "Backend", "Software Engineering"]
coverImage: "/images/globe.png"
---

# The assumption that deserved a closer look

I knew how to create a database index. Today's engineering read made me look more closely at what I was asking the database to do.

The tempting mental shortcut is simple: a query is slow, so add an index.

But an index creates another access path. Whether that path is useful depends on the query, the data distribution, and the work required to retrieve the results.

That distinction changed how I think about query performance.

## 1. An index is a maintained data structure

PostgreSQL uses B-tree indexes by default. They suit equality comparisons, ranges, and ordered retrieval.

A B-tree organizes keys across pages, allowing a search to navigate toward relevant entries. Locating those entries is only part of the work: PostgreSQL may still need to fetch table rows and process the results.

An index does not make returning millions of rows cheap merely because finding the first matching key is fast.

It also occupies storage and adds maintenance work as data changes. For an ingestion-heavy application, that cost matters.

**The question becomes: does this index save enough work to justify maintaining it?**

References: [Index introduction](https://www.postgresql.org/docs/18/indexes-intro.html) and [index types](https://www.postgresql.org/docs/18/indexes-types.html).

## 2. The query should shape the index

Consider a vessel-history query:

```sql
SELECT vessel_id, recorded_at, latitude, longitude
FROM positions
WHERE vessel_id = 42
  AND recorded_at >= TIMESTAMPTZ '2026-09-01 00:00:00+00'
  AND recorded_at < TIMESTAMPTZ '2026-10-01 00:00:00+00'
ORDER BY recorded_at;
```

A strong candidate is:

```sql
CREATE INDEX idx_positions_vessel_time
ON positions (vessel_id, recorded_at);
```

Its conceptual ordering looks like this:

| vessel_id | recorded_at (UTC) |
| --- | --- |
| 42 | 2026-09-01 09:00 |
| 42 | 2026-09-01 09:10 |
| 42 | 2026-09-01 09:20 |
| 43 | 2026-09-01 08:00 |
| 43 | 2026-09-01 08:10 |

Within one vessel's entries, timestamps are ordered. That fits the equality filter, the time range, and the requested ordering.

Reversing the columns changes that ordering. A useful starting heuristic for this pattern is **equality first, range second**, followed by measurement.

A timestamp-only query needs separate consideration. This index groups by vessel first. PostgreSQL 18 can sometimes use skip scans without a leading-column filter, especially with few distinct leading values; that does not make this index an ideal fit for every time query.

Reference: [Multicolumn indexes](https://www.postgresql.org/docs/18/indexes-multicolumn.html).

## 3. A sequential scan can be the sensible choice

Imagine that 98% of a jobs table has `status = 'COMPLETED'`.

```sql
SELECT *
FROM jobs
WHERE status = 'COMPLETED';
```

An index on `status` exists, but this query still asks for almost the entire table. Reading the table sequentially may cost less than traversing an index and fetching those rows.

That is the selectivity lesson: an index becomes attractive when it helps avoid substantial work. The percentage alone does not decide the plan; table size, row layout, caching, and other costs also matter.

**Seeing `Seq Scan` is a reason to inspect the plan, rather than immediately adding another index.**

Reference: [Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html).

## 4. Sometimes only a small subset needs indexing

This connected directly to worker pipelines for me. A worker may repeatedly look for pending jobs while most historical jobs are already complete.

```sql
SELECT id
FROM jobs
WHERE status = 'PENDING'
ORDER BY created_at, id
LIMIT 1
FOR UPDATE SKIP LOCKED;
```

A partial index can target that access pattern:

```sql
CREATE INDEX idx_jobs_pending_created
ON jobs (created_at, id)
WHERE status = 'PENDING';
```

Only pending rows qualify for this index. When they are a small fraction of the table, the index can be much smaller than one covering every job.

The planner must be able to establish that the query satisfies the index predicate. A generic prepared plan with `status = $1` may not establish that condition.

This helps locate eligible work; transaction boundaries and retry handling still determine worker correctness.

Reference: [Partial indexes](https://www.postgresql.org/docs/18/indexes-partial.html).

## 5. The expression matters too

An index on `email` does not provide the same lookup as an index on `LOWER(email)`.

For a case-insensitive equality query:

```sql
SELECT id
FROM users
WHERE LOWER(email) = 'avnish@example.com';
```

An expression index is a candidate:

```sql
CREATE INDEX idx_users_lower_email
ON users (LOWER(email));
```

The useful habit is to examine the exact expression being searched.

Reference: [Indexes on expressions](https://www.postgresql.org/docs/18/indexes-expressional.html).

## 6. The execution plan is where the assumption gets tested

For the vessel query above, prefix the statement with:

```sql
EXPLAIN (ANALYZE, BUFFERS)
```

Then inspect:

- **Estimated versus actual rows:** large differences can reveal inaccurate selectivity estimates.
- **Scan and sort nodes:** where does the query spend its work?
- **Buffer activity:** how many pages were accessed, and were they hits or reads?
- **Execution time and loops:** did the change help under comparable conditions?

`ANALYZE` here executes the query. Planner cost values are estimates in cost units, not milliseconds.

The examples in this post illustrate index design; they are not measured performance claims.

Reference: [Using EXPLAIN](https://www.postgresql.org/docs/18/using-explain.html).

## The habit I am taking forward

Before writing `CREATE INDEX`, I want to explain which rows the query needs, how the index organizes them, and what work it should eliminate. Then I want to check that explanation against the execution plan.

**Knowing the syntax creates an index. Understanding the access pattern tells me whether it belongs.**
