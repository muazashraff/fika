import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
import { formatEventDate, getUpcomingEvents } from "@/lib/events";
import Image from "next/image";
import Link from "next/link";

export default function EventsPreview() {
  const upcoming = getUpcomingEvents(3);

  return (
    <SectionReveal className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="heading-underline text-center font-playfair text-3xl text-navy md:text-4xl">
          Coming up at Skylight
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {upcoming.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative aspect-[4/5] w-full">
                {/* TODO: Replace with real photography */}
                <Image
                  src={event.posterImage ?? "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl text-navy">{event.title}</h3>
                <p className="mt-1 font-sans text-sm text-brown">
                  {formatEventDate(event.date)} · {event.time}
                </p>
                <p className="mt-2 font-sans text-sm font-semibold text-gold">{event.cost}</p>
                <Button href={event.externalLink} external variant="filled" className="mt-4 w-full !text-xs">
                  {event.registrationRequired === false && event.cost.toLowerCase() === "free"
                    ? "Free · Just Turn Up"
                    : "Register"}
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/events" className="font-sans text-gold hover:underline">
            See All Events →
          </Link>
        </p>
      </div>
    </SectionReveal>
  );
}
