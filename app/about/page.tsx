import BotanicalDivider from "@/components/ui/BotanicalDivider";
import SectionReveal from "@/components/ui/SectionReveal";
import { Globe, Handshake, Palette, Users } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const spacePhotos = [
  { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80", caption: "Dual-Screen Workstations" },
  { src: "https://images.unsplash.com/photo-1431540015166-0a8b1a38d001?w=600&q=80", caption: "Private Meeting Pod" },
  { src: "https://images.unsplash.com/photo-1481627834876-d7830168f557?w=600&q=80", caption: "Cosy Reading Corners" },
  { src: "https://images.unsplash.com/photo-1460667736837-4a1f2a6f9480?w=600&q=80", caption: "Rotating Gallery Wall" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a784e683d9?w=600&q=80", caption: "Board Games Collection" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80", caption: "Specialty Coffee Bar" },
];

const values = [
  { icon: Users, title: "People First", emoji: "👥" },
  { icon: Globe, title: "Accessibility", emoji: "🌍" },
  { icon: Palette, title: "Creativity", emoji: "🎨" },
  { icon: Handshake, title: "Community Impact", emoji: "🤝" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-20 pt-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              {/* TODO: Replace with real photo of Fallaq */}
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Fallaq Ujalla, Founder"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <div>
              <h1 className="font-playfair text-3xl text-navy">Fallaq Ujalla</h1>
              <p className="mt-1 font-sans text-gold">Founder & CEO</p>
              <blockquote className="mt-6 border-l-4 border-gold pl-4 font-lora text-lg italic text-brown">
                &ldquo;I didn&apos;t just want to open a café. I wanted to build a home.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <SectionReveal className="grain-overlay bg-navy py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="border-l-4 border-gold pl-4 font-playfair text-2xl text-gold">
            Our Story
          </h2>
          <div className="mt-8 space-y-6 font-lora leading-relaxed text-cream/90">
            <p>
              Skylight Lounge began with a simple idea: to create a place where everyone feels
              welcome. A place that feels warm the moment you walk in, where conversations flow
              as easily as the coffee pours, and where community isn&apos;t a marketing word but
              the heart of everything we do.
            </p>
            <p>
              Founded in Bradford in 2024 by Fallaq Ujalla — after years in STEM and a lifetime
              of creating art, exploring coffee, and working with people from all walks of life —
              Skylight was built to blend everything she loved. A space that didn&apos;t just serve
              coffee. It served connection.
            </p>
            <p>
              Seven months after opening, Skylight Lounge won the Young Entrepreneur of the Year
              award at the QED YAYA Awards. But our journey is still only beginning. We&apos;re
              constantly innovating, growing and finding new ways to give back to the community
              that shaped us.
            </p>
            <p className="font-playfair text-xl text-gold">
              Welcome to Skylight. Welcome home.
            </p>
          </div>
        </div>
      </SectionReveal>

      <BotanicalDivider />

      <SectionReveal className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="heading-underline text-center font-playfair text-3xl text-navy">
            The Space
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spacePhotos.map((photo) => (
              <figure key={photo.caption} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  {/* TODO: Replace with real photography */}
                  <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform group-hover:scale-105" sizes="400px" />
                </div>
                <figcaption className="mt-2 text-center font-sans text-sm text-navy">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="grain-overlay bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="mb-12 text-center font-playfair text-3xl text-gold">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-gold/20 bg-navy p-6 text-center">
                <span className="text-2xl" aria-hidden="true">{v.emoji}</span>
                <v.icon className="mx-auto mt-3 text-gold" size={28} />
                <h3 className="mt-4 font-sans font-semibold text-cream">{v.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <div className="bg-gold/15 py-6 text-center">
        <p className="font-lora text-navy">
          🏆 Young Entrepreneur of the Year — QED YAYA Awards, 2024
        </p>
      </div>
    </>
  );
}
