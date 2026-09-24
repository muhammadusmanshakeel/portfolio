export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  projectType: string;
  budget: string;
  /** Honeypot — must stay empty */
  company: string;
};

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "message" | "projectType" | "budget", string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(
  raw: Partial<ContactPayload>,
): { ok: true; data: ContactPayload } | { ok: false; errors: ContactFieldErrors } {
  const errors: ContactFieldErrors = {};

  const name = (raw.name ?? "").trim();
  const email = (raw.email ?? "").trim();
  const message = (raw.message ?? "").trim();
  const projectType = (raw.projectType ?? "").trim();
  const budget = (raw.budget ?? "").trim();
  const company = (raw.company ?? "").trim();

  // Honeypot triggered — treat as soft success upstream; still "invalid" here
  if (company) {
    return {
      ok: false,
      errors: { name: "Unable to submit this request." },
    };
  }

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name must be 80 characters or fewer.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email) || email.length > 120) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 2000) {
    errors.message = "Message must be 2000 characters or fewer.";
  }

  if (projectType.length > 60) {
    errors.projectType = "Invalid project type.";
  }

  if (budget.length > 60) {
    errors.budget = "Invalid budget selection.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, message, projectType, budget, company: "" },
  };
}
