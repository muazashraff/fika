"use client";

import { FormError, FormSuccess } from "@/components/forms/FormFeedback";
import { sendEmail } from "@/lib/emailjs";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Loader2, LucideIcon, Users } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

type CardId = "table" | "group" | null;

const inputClass =
  "w-full rounded border border-brown/25 bg-cream px-4 py-3 font-sans text-sm text-espresso focus:border-brown focus:outline-none focus:ring-1 focus:ring-brown";

export default function BookPage() {
  const [openCard, setOpenCard] = useState<CardId>("table");

  const toggle = (id: CardId) => setOpenCard(openCard === id ? null : id);

  return (
    <>
      <section className="bg-espresso py-24 pt-32">
        <div className="relative z-10">
          <h1 className="text-center font-cormorant text-5xl text-cream">Book a Table</h1>
          <p className="mx-auto mt-4 max-w-xl px-4 text-center font-sans text-cream/70">
            Reserve your table at Fika, or enquire about a group booking.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 pb-24">
        <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-8">
          <BookCard
            icon={Calendar}
            title="Book a Table"
            description="Reserve a table for your visit."
            open={openCard === "table"}
            onToggle={() => toggle("table")}
          >
            <TableBookingForm />
          </BookCard>

          <BookCard
            icon={Users}
            title="Group Booking Enquiry"
            description="Planning a larger visit? Let us know and we'll help you plan it."
            open={openCard === "group"}
            onToggle={() => toggle("group")}
          >
            <GroupBookingForm />
          </BookCard>
        </div>
      </section>
    </>
  );
}

function BookCard({
  icon: Icon,
  title,
  description,
  open,
  onToggle,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-brown/20 bg-beige shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <Icon className="mt-1 shrink-0 text-brown" size={28} />
        <div>
          <h2 className="font-cormorant text-xl text-espresso">{title}</h2>
          <p className="mt-1 font-sans text-sm text-espresso/60">{description}</p>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="border-t border-brown/15 px-6 pb-6 pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TableBookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await sendEmail("tableBooking", {
        from_name: String(data.get("name") ?? ""),
        from_email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        date: String(data.get("date") ?? ""),
        time: String(data.get("time") ?? ""),
        party_size: String(data.get("party_size") ?? ""),
        notes: String(data.get("notes") ?? ""),
      });
      setSuccess(true);
      form.reset();
    } catch {
      setError("We couldn't send your booking — please call us or try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return <FormSuccess message="Booking request sent! We'll confirm by email." />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <FormError message={error} />}
      <Field label="Name *" name="name" required />
      <Field label="Email *" name="email" type="email" required />
      <Field label="Phone" name="phone" />
      <Field label="Date *" name="date" type="date" required min={today} />
      <div>
        <label className="mb-1 block font-sans text-sm text-espresso">Time *</label>
        <select name="time" required className={inputClass}>
          <option value="">Select...</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block font-sans text-sm text-espresso">Party size *</label>
        <select name="party_size" required className={inputClass}>
          <option value="">Select...</option>
          <option value="1–2">1–2</option>
          <option value="3–5">3–5</option>
          <option value="6+">6+</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block font-sans text-sm text-espresso">Notes</label>
        <textarea name="notes" rows={3} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-brown px-6 py-3 font-sans text-sm font-semibold text-cream hover:bg-espresso disabled:opacity-50"
      >
        {loading && <Loader2 className="animate-spin" size={18} />}
        Submit Booking
      </button>
      <p className="font-sans text-xs text-espresso/50">
        We&apos;ll confirm your booking by email.
      </p>
    </form>
  );
}

function GroupBookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await sendEmail("privateHire", {
        from_name: String(data.get("name") ?? ""),
        from_email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        guest_count: String(data.get("guest_count") ?? ""),
        preferred_date: String(data.get("preferred_date") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setSuccess(true);
      form.reset();
    } catch {
      setError("We couldn't send your enquiry — please try again or email us.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return <FormSuccess message="Enquiry sent! We'll be in touch soon." />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <FormError message={error} />}
      <Field label="Name *" name="name" required />
      <Field label="Email *" name="email" type="email" required />
      <Field label="Phone" name="phone" />
      <Field label="Guest count *" name="guest_count" required />
      <Field label="Preferred date *" name="preferred_date" type="date" required min={today} />
      <div>
        <label className="mb-1 block font-sans text-sm text-espresso">Message *</label>
        <textarea name="message" required rows={4} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-brown px-6 py-3 font-sans text-sm font-semibold text-cream hover:bg-espresso disabled:opacity-50"
      >
        {loading && <Loader2 className="animate-spin" size={18} />}
        Send Enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div>
      <label className="mb-1 block font-sans text-sm text-espresso">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        className={inputClass}
      />
    </div>
  );
}
