"use client";

import { FormError, FormSuccess } from "@/components/forms/FormFeedback";
import { sendEmail } from "@/lib/emailjs";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded border border-navy/20 bg-white px-4 py-3 font-sans text-sm text-navy focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await sendEmail("contact", {
        from_name: String(data.get("name") ?? ""),
        from_email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong — please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <FormSuccess message="Thank you! We'll get back to you soon." />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <FormError message={error} />}
      <div>
        <label htmlFor="contact-name" className="mb-1 block font-sans text-sm text-navy">
          Name
        </label>
        <input id="contact-name" name="name" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block font-sans text-sm text-navy">
          Email
        </label>
        <input id="contact-email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block font-sans text-sm text-navy">
          Message
        </label>
        <textarea id="contact-message" name="message" required rows={5} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-gold px-6 py-3 font-sans text-sm font-semibold text-navy transition hover:scale-[1.02] disabled:opacity-50"
      >
        {loading && <Loader2 className="animate-spin" size={18} />}
        Send Message
      </button>
    </form>
  );
}
