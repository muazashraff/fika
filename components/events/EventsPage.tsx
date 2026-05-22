"use client";

import Button from "@/components/ui/Button";
import { Event } from "@/data/events";
import {
  EventFilter,
  filterEvents,
  formatEventDate,
} from "@/lib/events";
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

      <section className="grain-overlay bg-navy pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
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
        <div className="mt-4">
          <Button href={event.externalLink} external variant="filled" className="!text-xs">
            Register / Info
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
