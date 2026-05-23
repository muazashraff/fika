"use client";

import Button from "@/components/ui/Button";
import NavyBg from "@/components/ui/NavyBg";
import { FormError, FormSuccess } from "@/components/forms/FormFeedback";
import { sendEmail } from "@/lib/emailjs";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Loader2,
  LucideIcon,
  PartyPopper,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";

type CardId = "table" | "hire" | "events" | null;

const inputClass =
  "w-full rounded border border-gold/20 bg-navy/50 px-4 py-3 font-sans text-sm text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export default function BookPage() {
  const [openCard, setOpenCard] = useState<CardId>(null);

  const toggle = (id: CardId) => setOpenCard(openCard === id ? null : id);

  return (
    <>
      <section className="relative overflow-hidden py-24 pt-32">
        <NavyBg />
        <div className="relative z-10">
          <h1 className="text-center font-playfair text-5xl text-gold">Book</h1>
          <p className="mx-auto mt-4 max-w-xl px-4 text-center font-lora text-cream/80">
            Reserve your table, workspace, or enquire about private hire.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 pb-24">
        <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-8">
          <BookCard
            icon={Calendar}
            title="Book a Table or Workspace"
            description="Reserve a table, workstation, or meeting pod."
            open={openCard === "table"}
            onToggle={() => toggle("table")}
          >
            <TableBookingForm />
          </BookCard>

          <BookCard
            icon={Users}
            title="Private Hire Enquiry"
            description="Birthdays, corporate events, networking & more."
            open={openCard === "hire"}
            onToggle={() => toggle("hire")}
          >
            <PrivateHireForm />
          </BookCard>

          <BookCard
            icon={PartyPopper}
            title="Events"
            description="Each event has its own sign-up link."
            open={openCard === "events"}
            onToggle={() => toggle("events")}
          >
            <p className="font-lora text-cream/80">
              Each event has its own sign-up link — head to What&apos;s On to register.
            </p>
            <Link href="/events" className="mt-4 inline-block">
              <Button variant="filled">See What&apos;s On →</Button>
            </Link>
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
    <div className="overflow-hidden rounded-lg border border-gold/30 bg-navy shadow-lg">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <Icon className="mt-1 shrink-0 text-gold" size={28} />
        <div>
          <h2 className="font-playfair text-xl text-gold">{title}</h2>
          <p className="mt-1 font-lora text-sm text-cream/70">{description}</p>
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
            <div className="border-t border-gold/20 px-6 pb-6 pt-2">{children}</div>
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
        preference: String(data.get("preference") ?? ""),
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
        <label className="mb-1 block font-sans text-sm text-cream">Time *</label>
        <select name="time" required className={inputClass}>
          <option value="">Select...</option>
          <option value="Morning 9–12">Morning 9–12</option>
          <option value="Afternoon 12–5">Afternoon 12–5</option>
          <option value="Evening 5–close">Evening 5–close</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block font-sans text-sm text-cream">Party size *</label>
        <select name="party_size" required className={inputClass}>
          <option value="">Select...</option>
          <option value="1–2">1–2</option>
          <option value="3–5">3–5</option>
          <option value="6+">6+</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block font-sans text-sm text-cream">Preference *</label>
        <select name="preference" required className={inputClass}>
          <option value="">Select...</option>
          <option value="Table">Table</option>
          <option value="Workstation">Workstation</option>
          <option value="Meeting Pod">Meeting Pod</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block font-sans text-sm text-cream">Notes</label>
        <textarea name="notes" rows={3} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-gold px-6 py-3 font-sans text-sm font-semibold text-navy disabled:opacity-50"
      >
        {loading && <Loader2 className="animate-spin" size={18} />}
        Submit Booking
      </button>
      <p className="font-lora text-xs text-cream/60">
        Workspace is free with any drink purchase. We&apos;ll confirm your booking by email.
      </p>
    </form>
  );
}

function PrivateHireForm() {
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
        event_type: String(data.get("event_type") ?? ""),
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
      <div>
        <label className="mb-1 block font-sans text-sm text-cream">Event type *</label>
        <select name="event_type" required className={inputClass}>
          <option value="">Select...</option>
          <option value="Birthday">Birthday</option>
          <option value="Corporate">Corporate</option>
          <option value="Networking">Networking</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <Field label="Guest count *" name="guest_count" required />
      <Field label="Preferred date *" name="preferred_date" type="date" required min={today} />
      <div>
        <label className="mb-1 block font-sans text-sm text-cream">Message *</label>
        <textarea name="message" required rows={4} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-gold px-6 py-3 font-sans text-sm font-semibold text-navy disabled:opacity-50"
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
      <label className="mb-1 block font-sans text-sm text-cream">{label}</label>
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
