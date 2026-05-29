import NavyBg from "@/components/ui/NavyBg";
import SectionReveal from "@/components/ui/SectionReveal";
import BotanicalDivider from "@/components/ui/BotanicalDivider";
import { currentArtist } from "@/data/artist";
import { businessInfo } from "@/data/info";
import { Camera, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="heading-underline font-playfair text-4xl text-navy md:text-5xl">
            Gallery
          </h1>
        </div>
      </section>

      <SectionReveal className="relative overflow-hidden py-16">
        <NavyBg />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-playfair text-2xl text-gold">Artist Spotlight</h2>
          <p className="mt-2 font-sans text-sm text-cream/60">Rotating gallery wall</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-playfair text-xl text-cream">{currentArtist.name}</h3>
              <p className="mt-4 font-lora text-cream/80">{currentArtist.bio}</p>
              <a
                href={`https://instagram.com/${currentArtist.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-cream"
              >
                <Instagram size={18} />
                {currentArtist.instagram}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {currentArtist.images.map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded">
                  {/* TODO: Replace with real photography */}
                  <Image src={src} alt={`${currentArtist.name} work ${i + 1}`} fill className="object-cover" sizes="200px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Share CTA — keeps the blue/white alternating pattern */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <Camera size={32} className="mx-auto text-gold" strokeWidth={1.5} />
          <h2 className="mt-4 font-playfair text-3xl text-navy md:text-4xl">
            Share your Skylight moment
          </h2>
          <BotanicalDivider className="py-4" />
          <p className="font-lora text-lg text-brown">
            Every visit tells a story. Tag us on Instagram and your photo could
            be featured right here — or even on our gallery wall.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-sans text-sm font-semibold text-cream transition-colors hover:bg-navy/80"
            >
              <Instagram size={18} />
              Follow @the.skylight.lounge
            </Link>
            <span className="font-sans text-sm text-brown/60">
              Use <span className="font-semibold text-gold">#SkylightLounge</span> to be featured
            </span>
          </div>

          <p className="mt-10 font-lora text-sm italic text-brown/60">
            Our gallery wall rotates every few weeks — local artists welcome to apply via the contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
