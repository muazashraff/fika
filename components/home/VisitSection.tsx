import BotanicalDivider from "@/components/ui/BotanicalDivider";
import SectionReveal from "@/components/ui/SectionReveal";
import { businessInfo } from "@/data/info";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function VisitSection() {
  return (
    <SectionReveal className="bg-beige py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-brown">
            Bradford, West Yorkshire
          </p>
          <h2 className="mt-3 font-cormorant text-3xl text-espresso md:text-4xl">
            Come find us
          </h2>
          <BotanicalDivider className="py-4" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Hours */}
          <div className="rounded-2xl border border-brown/15 bg-cream p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-brown" strokeWidth={1.5} />
              <h3 className="font-cormorant text-xl text-espresso">Opening Hours</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {businessInfo.hours.map(({ days, hours }) => (
                <li key={days} className="flex items-center justify-between border-b border-brown/10 pb-3 last:border-0 last:pb-0">
                  <span className="font-sans text-sm text-espresso/70">{days}</span>
                  <span className="font-sans text-sm font-semibold text-espresso">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-brown/15 bg-cream p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-brown" strokeWidth={1.5} />
              <h3 className="font-cormorant text-xl text-espresso">Find Us</h3>
            </div>
            <p className="mt-6 font-sans leading-relaxed text-espresso/80">
              {businessInfo.address}
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-espresso/60">
              Located on Thornton Road, a short walk from Bradford city centre.
            </p>
            <Link
              href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-sans text-sm text-brown hover:underline"
            >
              Get Directions →
            </Link>
          </div>
        </div>

        <p className="mt-10 text-center font-sans text-sm italic text-espresso/60">
          Walk in, slow down, stay a while — there&apos;s always a seat for you.
        </p>
      </div>
    </SectionReveal>
  );
}
