import NavyBg from "@/components/ui/NavyBg";
import SectionReveal from "@/components/ui/SectionReveal";
import { currentArtist } from "@/data/artist";
import { Instagram } from "lucide-react";
import Image from "next/image";
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
    </div>
  );
}
