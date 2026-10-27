export type Enquiry = {
  name: string;
  email: string;
  message: string;
  company: string;
  service: string;
  existingSystem: string;
  deadline: string;
  currency: string;
  budget: string;
  website: string;
};
const limits: Record<keyof Enquiry, number> = {
  name: 120,
  email: 254,
  message: 5000,
  company: 300,
  service: 80,
  existingSystem: 1500,
  deadline: 200,
  currency: 3,
  budget: 200,
  website: 300,
};
const allowedServices = [
  "backend-development",
  "ai-workflow-automation",
  "full-stack-development",
  "application-improvement",
];
export function validateEnquiry(
  value: unknown,
): { ok: true; data: Enquiry } | { ok: false; message: string } {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { ok: false, message: "Please provide your project details." };
  const input = value as Record<string, unknown>;
  const data = {} as Enquiry;
  for (const field of Object.keys(limits) as (keyof Enquiry)[]) {
    const raw = input[field] ?? "";
    if (typeof raw !== "string" || raw.length > limits[field])
      return {
        ok: false,
        message: "One of the fields is too long or has an invalid value.",
      };
    data[field] = raw.trim();
  }
  if (data.name.length < 2 || data.message.length < 20)
    return {
      ok: false,
      message:
        "Please include your name and at least 20 characters describing your project.",
    };
  if (
    !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) ||
    /[\r\n]/.test(data.name)
  )
    return {
      ok: false,
      message: "Please provide a valid name and email address.",
    };
  if (data.service && !allowedServices.includes(data.service))
    return { ok: false, message: "Please choose one of the listed services." };
  if (data.currency && !["INR", "USD"].includes(data.currency))
    return { ok: false, message: "Please choose INR or USD." };
  return { ok: true, data };
}
export function enquiryText(data: Enquiry) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company / website: ${data.company || "Not provided"}`,
    `Service: ${data.service || "Not sure yet"}`,
    `Existing system: ${data.existingSystem || "Not provided"}`,
    `Deadline: ${data.deadline || "Not provided"}`,
    `Budget: ${data.budget ? `${data.currency} ${data.budget}`.trim() : "Not provided"}`,
    "",
    "Project:",
    data.message,
  ].join("\n");
}
