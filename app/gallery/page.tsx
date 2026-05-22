import SectionReveal from "@/components/ui/SectionReveal";
import { currentArtist } from "@/data/artist";
import { Instagram } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

const spaceImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e736a970f?w=500&q=80",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&q=80",
  "https://images.unsplash.com/photo-1501339846602-acfcc0c1a3f2?w=500&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
];

const eventImages = [
  "https://images.unsplash.com/photo-1611892440504-42a784e683d9?w=500&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80",
];

const drinkImages = [
  "https://images.unsplash.com/photo-1515823064-6f4b9c4e0b8b?w=500&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e736a970f?w=500&q=80",
];

function PhotoGrid({ images, altPrefix }: { images: string[]; altPrefix: string }) {
  return (
    <div className="columns-2 gap-4 md:columns-3">
      {images.map((src, i) => (
        <div key={i} className="relative mb-4 break-inside-avoid overflow-hidden rounded-lg">
          {/* TODO: Replace with real photography */}
          <Image
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            width={500}
            height={i % 2 === 0 ? 400 : 600}
            className="h-auto w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

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

      <SectionReveal className="grain-overlay bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
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

      <SectionReveal className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="heading-underline font-playfair text-2xl text-navy">The Space</h2>
          <div className="mt-8">
            <PhotoGrid images={spaceImages} altPrefix="Space" />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="grain-overlay bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-playfair text-2xl text-gold">Events & Community</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {eventImages.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded">
                {/* TODO: Replace with real photography */}
                <Image src={src} alt={`Event ${i + 1}`} fill className="object-cover" sizes="250px" />
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-cream py-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="heading-underline font-playfair text-2xl text-navy">The Drinks</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {drinkImages.map((src, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                {/* TODO: Replace with real photography */}
                <Image src={src} alt={`Drink ${i + 1}`} fill className="object-cover" sizes="300px" />
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
