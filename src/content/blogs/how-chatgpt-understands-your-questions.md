---
coverImage: /images/how-chatgpt-understands.png
date: 2026-06-30
description: A beginner-friendly explanation of what actually happens
  inside ChatGPT when you ask it a question.
tags:
- AI
- GenAI
- LLM
- Transformers
- ChatGPT
title: How ChatGPT Understands Your Questions
---

# How ChatGPT Understands Your Questions

So, nowadays everyone is aware of ChatGPT, as it is the most famous AI
chatbot out there.

But why has there been so much buzz around it over the last 3--4 years,
when we already had chatbots before?

A popular answer to this question is:

> **Because it is an LLM --- a Large Language Model.**

But then the next question naturally comes to mind:

**How is it different from traditional Machine Learning or Deep Learning
models?**

Let's break it down.

------------------------------------------------------------------------

# What is an LLM?

LLM stands for **Large Language Model**.

## Large

The word **Large** refers to the massive amount of data the model was
trained on.

You can think of it as learning from a huge collection of text---books,
articles, websites, documentation, research papers, and much more.
People often say it has "seen the internet."

Another reason it is called large is because it contains **billions of
parameters**, which are the values it learns during training.

## Language

It is specifically designed to **understand, process and generate human
language.**

Unlike traditional ML models that mostly recognize patterns for
classification or prediction, LLMs are built to communicate with humans
using natural language.

## Model

At the end of the day, it is still a Machine Learning model.

It learns patterns from data and uses those learned patterns to predict
the next output.

------------------------------------------------------------------------

# What Problem Does an LLM Solve?

The biggest problem LLMs solve is **human-computer communication.**

Instead of giving strict commands or writing code, humans can simply
communicate using natural language.

Examples include:

-   Customer support
-   Programming assistance
-   Search
-   Content writing
-   Education

Popular examples are **ChatGPT, Gemini and Claude**.

------------------------------------------------------------------------

# What Actually Happens When You Write a Prompt?

Let's dive in.

``` text
User
  │
  ▼
Prompt
  │
  ▼
LLM
  │
  ▼
Response
```

Although it feels like ChatGPT understands English, internally it
follows a series of mathematical steps.

------------------------------------------------------------------------

# Step 1 --- Text Becomes Tokens

The first thing an LLM does is convert your prompt into **tokens**.

A computer cannot process language directly.

It processes tokens.

A token is not necessarily a complete word.

Sometimes it is a full word.

Sometimes only part of a word.

Examples:

``` text
"apple"
↓

["apple"]

"unfriendly"
↓

["un", "friend", "ly"]
```

------------------------------------------------------------------------

# Step 2 --- Tokens Become Embeddings

After tokenization, each token is converted into a **vector embedding**.

These are simply numerical representations.

``` text
Text

↓

Tokens

↓

Embeddings

[0.28, -0.64, 1.12, ...]
```

This allows the computer to process language mathematically.

------------------------------------------------------------------------

# Step 3 --- Transformer Processes Everything

Now the embeddings are passed into the Transformer.

At the core of every modern LLM is the **Transformer architecture**.

It processes the context and calculates the probability of the next
token.

``` text
Text
   │
   ▼
Tokens
   │
   ▼
Transformer
(Self Attention)
   │
   ▼
Probability Distribution
```

------------------------------------------------------------------------

# Step 4 --- Predict the Next Token

An LLM does **not** generate an entire paragraph at once.

Instead, it predicts one token.

Then it looks at:

-   your original prompt
-   the token it just generated

and predicts the next token again.

This process keeps repeating until the response is complete.

That is why ChatGPT streams its answer word by word.

``` text
Prompt

↓

Token 1

↓

Token 2

↓

Token 3

↓

...

↓

Final Response
```

------------------------------------------------------------------------

# Why Don't Computers Understand Human Language?

People often say ChatGPT understands language.

Technically, computers do not understand language the same way humans
do.

A computer's CPU only performs mathematical operations using binary
values (0s and 1s).

Everything first has to be converted into numbers.

That is exactly why tokenization and embeddings exist.

------------------------------------------------------------------------

# What are Transformers?

If you have explored AI recently, you might have heard about the famous
research paper:

> **Attention Is All You Need (2017)**

This paper introduced the **Transformer architecture**, and from there
everything changed.

------------------------------------------------------------------------

# Why Did Transformers Change Everything?

Before Transformers, Deep Learning models processed text sequentially.

That caused two major problems:

-   They were slow.
-   They often forgot information from the beginning of long sentences.

Transformers introduced parallel processing.

Instead of reading one word at a time, they can process an entire
sequence simultaneously.

This drastically reduced training time and made it possible to train on
internet-scale datasets.

The **Self-Attention mechanism** also helped models understand
relationships between words much better than previous architectures.

------------------------------------------------------------------------

# Context Window

Every response generated by an LLM depends on the context available to
it.

``` text
┌─────────────────────────────┐
│ System Prompt               │
├─────────────────────────────┤
│ Previous Conversation       │
├─────────────────────────────┤
│ Your Prompt                 │
├─────────────────────────────┤
│ Generated Response          │
└─────────────────────────────┘
```

Everything inside this window is used while predicting the next token.

------------------------------------------------------------------------

# Temperature

Temperature controls how random the next token selection should be.

  Temperature   Behaviour
  ------------- --------------------------------
  0.1           More deterministic and factual
  0.7           Balanced
  1.5           More creative and random

------------------------------------------------------------------------

# Complete High-Level LLM Workflow

``` text
                User
                  │
                  ▼
             Enter Prompt
                  │
                  ▼
              Tokenizer
                  │
                  ▼
         Vector Embeddings
                  │
                  ▼
      Transformer + Self Attention
                  │
                  ▼
     Next Token Probability
                  │
                  ▼
      Generate Next Token
                  │
          Repeat Until End
                  │
                  ▼
            Final Response
```

------------------------------------------------------------------------

# Final Thoughts

Although ChatGPT feels like it understands our questions just like a
human, internally it is performing a sequence of mathematical
operations.

Your prompt is converted into tokens.

Those tokens become embeddings.

The Transformer processes them using Self-Attention.

Finally, the model predicts one token at a time until the complete
response is generated.

That is the reason modern LLMs feel so natural to talk to.

Understanding these fundamentals is the first step towards understanding
how modern Generative AI actually works.
