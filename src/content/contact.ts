export const contactContent = {
  eyebrow: "10 — Contact",
  title: "Let’s work together",
  description:
    "Tell me about your project or say hello. I’ll respond as soon as I can.",
  projectTypes: [
    { value: "", label: "Select project type (optional)" },
    { value: "new-website", label: "New website" },
    { value: "redesign", label: "Website redesign / modernization" },
    { value: "frontend", label: "Frontend development" },
    { value: "php-mysql", label: "PHP / MySQL application" },
    { value: "react-next", label: "React / Next.js" },
    { value: "maintenance", label: "Maintenance / bug fixing" },
    { value: "other", label: "Other" },
  ],
  budgetRanges: [
    { value: "", label: "Select budget range (optional)" },
    { value: "undecided", label: "Not sure yet" },
    { value: "under-500", label: "Under $500" },
    { value: "500-1500", label: "$500 – $1,500" },
    { value: "1500-5000", label: "$1,500 – $5,000" },
    { value: "5000-plus", label: "$5,000+" },
  ],
  successTitle: "Message ready",
  successWithDelivery:
    "Thanks — your message was sent. I’ll get back to you soon.",
  successWithoutDelivery:
    "Your message passed validation. Email delivery is not configured yet — add your email in profile settings or set CONTACT_WEBHOOK_URL.",
  errorGeneric: "Something went wrong. Please check the form and try again.",
} as const;
