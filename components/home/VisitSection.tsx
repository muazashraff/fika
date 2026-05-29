import BotanicalDivider from "@/components/ui/BotanicalDivider";
import SectionReveal from "@/components/ui/SectionReveal";
import { businessInfo } from "@/data/info";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function VisitSection() {
  return (
    <SectionReveal className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-gold">
            Bradford, West Yorkshire
          </p>
          <h2 className="mt-3 font-playfair text-3xl text-navy md:text-4xl">
            Come find us
          </h2>
          <BotanicalDivider className="py-4" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Hours */}
          <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-gold" strokeWidth={1.5} />
              <h3 className="font-playfair text-xl text-navy">Opening Hours</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {businessInfo.hours.map(({ days, hours }) => (
                <li key={days} className="flex items-center justify-between border-b border-gold/10 pb-3 last:border-0 last:pb-0">
                  <span className="font-sans text-sm text-brown">{days}</span>
                  <span className="font-sans text-sm font-semibold text-navy">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-gold" strokeWidth={1.5} />
              <h3 className="font-playfair text-xl text-navy">Find Us</h3>
            </div>
            <p className="mt-6 font-lora leading-relaxed text-brown">
              {businessInfo.address}
            </p>
            <p className="mt-4 font-lora text-sm leading-relaxed text-brown/80">
              Five minutes from Bradford city centre. Street parking available on Norman Lane.
            </p>
            <Link
              href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-sans text-sm text-gold hover:underline"
            >
              Get Directions →
            </Link>
          </div>
        </div>

        <p className="mt-10 text-center font-lora text-sm italic text-brown/70">
          Walk in, stay a while — there&apos;s always a seat with your name on it.
        </p>
      </div>
    </SectionReveal>
  );
}
