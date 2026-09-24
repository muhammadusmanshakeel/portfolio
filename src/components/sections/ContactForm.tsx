"use client";

import { type FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { contactContent } from "@/content/contact";
import {
  type ContactFieldErrors,
  type ContactPayload,
  validateContactPayload,
} from "@/lib/contact-validation";
import styles from "./ContactForm.module.css";

const initial: ContactPayload = {
  name: "",
  email: "",
  message: "",
  projectType: "",
  budget: "",
  company: "",
};

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<ContactPayload>(initial);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [delivered, setDelivered] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as keyof ContactFieldErrors]) return prev;
      const next = { ...prev };
      delete next[key as keyof ContactFieldErrors];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const result = validateContactPayload(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        delivered?: boolean;
        errors?: ContactFieldErrors;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setFormError(data.message ?? contactContent.errorGeneric);
        setStatus("error");
        return;
      }

      setDelivered(Boolean(data.delivered));
      setStatus("success");
      setValues(initial);
    } catch {
      setFormError(contactContent.errorGeneric);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <h3 className={styles.successTitle}>{contactContent.successTitle}</h3>
        <p>
          {delivered
            ? contactContent.successWithDelivery
            : contactContent.successWithoutDelivery}
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setStatus("idle");
            setDelivered(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const messageId = `${formId}-message`;
  const projectId = `${formId}-project`;
  const budgetId = `${formId}-budget`;
  const formErrorId = `${formId}-form-error`;

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={nameId}>
            Name <span className={styles.required}>*</span>
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
          />
          {errors.name ? (
            <p id={`${nameId}-error`} className={styles.error} role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor={emailId}>
            Email <span className={styles.required}>*</span>
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={120}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
          />
          {errors.email ? (
            <p id={`${emailId}-error`} className={styles.error} role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={projectId}>Project type</label>
          <select
            id={projectId}
            name="projectType"
            value={values.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
          >
            {contactContent.projectTypes.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p className={styles.error} role="alert">
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor={budgetId}>Budget</label>
          <select
            id={budgetId}
            name="budget"
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
            aria-invalid={Boolean(errors.budget)}
          >
            {contactContent.budgetRanges.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.budget ? (
            <p className={styles.error} role="alert">
              {errors.budget}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={messageId}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={6}
          maxLength={2000}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
        />
        {errors.message ? (
          <p id={`${messageId}-error`} className={styles.error} role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p id={formErrorId} className={styles.formError} role="alert">
          {formError}
        </p>
      ) : null}

      <div className={styles.actions}>
        <Button type="submit" variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <p className={styles.note}>
          Required fields marked with *. Delivery activates when{" "}
          <code>CONTACT_WEBHOOK_URL</code> is set.
        </p>
      </div>
    </form>
  );
}
