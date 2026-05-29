"use client";

import Button from "@/components/ui/Button";
import NavyBg from "@/components/ui/NavyBg";
import BotanicalDivider from "@/components/ui/BotanicalDivider";
import { Event } from "@/data/events";
import {
  EventFilter,
  filterEvents,
  formatEventDate,
} from "@/lib/events";
import { Cake, Mic2, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const filters: { id: EventFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "week", label: "This Week" },
  { id: "month", label: "This Month" },
  { id: "past", label: "Past Events" },
];

export default function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>("all");
  const filtered = filterEvents(filter);
  const isPast = filter === "past";

  return (
    <>
      <section className="bg-cream py-24 pt-32">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h1 className="heading-underline font-playfair text-4xl text-navy md:text-5xl">
            What&apos;s On at Skylight
          </h1>
          <p className="mt-6 font-lora text-lg text-brown">
            From games nights to cultural evenings, networking to open mic — there&apos;s
            always something happening at Skylight.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20 pt-12">
        <NavyBg />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`font-sans text-sm transition-colors ${
                  filter === f.id
                    ? "border-b-2 border-gold text-gold"
                    : "text-cream/60 hover:text-cream"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center font-lora text-cream/70">
              Check back soon — more events coming.
            </p>
          ) : (
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} muted={isPast} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Private events CTA — keeps the blue/white alternating pattern */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-gold">
              Private Hire
            </p>
            <h2 className="mt-3 font-playfair text-3xl text-navy md:text-4xl">
              Host your own event here
            </h2>
            <BotanicalDivider className="py-4" />
            <p className="mx-auto mt-2 max-w-xl font-lora text-lg text-brown">
              From birthdays to brand launches, Skylight Lounge is available for
              private hire. Bring your vision — we&apos;ll handle the rest.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Cake,
                title: "Celebrations",
                desc: "Birthdays, anniversaries, baby showers — intimate gatherings done beautifully.",
              },
              {
                icon: Users,
                title: "Corporate & Networking",
                desc: "Team away-days, workshops, product launches, and community meetups.",
              },
              {
                icon: Mic2,
                title: "Creative Nights",
                desc: "Open mics, poetry slams, art shows, film screenings — we love a creative takeover.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm text-center"
              >
                <Icon size={28} className="mx-auto text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-playfair text-xl text-navy">{title}</h3>
                <p className="mt-3 font-lora text-sm text-brown">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/contact" variant="filled">
              Enquire About Private Hire →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function EventCard({ event, muted }: { event: Event; muted: boolean }) {
  return (
    <motion.article
      whileHover={muted ? undefined : { y: -4 }}
      className={muted ? "opacity-60" : ""}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
        {/* TODO: Replace with real photography */}
        <Image
          src={
            event.posterImage ??
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
          }
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="mt-4">
        <h2 className="font-playfair text-2xl text-cream">{event.title}</h2>
        <p className="mt-1 font-sans text-sm text-cream/70">
          {formatEventDate(event.date)} · {event.time}
        </p>
        <span className="mt-2 inline-block rounded bg-gold/20 px-2 py-0.5 font-sans text-xs font-semibold text-gold">
          {event.cost}
        </span>
        {event.description && (
          <p className="mt-3 font-lora text-sm text-cream/80">{event.description}</p>
        )}
        <div className="mt-4">
          <Button href={event.externalLink} external variant="filled" className="!text-xs">
            {event.registrationRequired === false && event.cost.toLowerCase() === "free"
              ? "Free · Just Turn Up"
              : "Register / Info"}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
