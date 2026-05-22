import SectionReveal from "@/components/ui/SectionReveal";
import { businessInfo } from "@/data/info";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const placeholders = [
  "https://images.unsplash.com/photo-1501339846602-acfcc0c1a3f2?w=400&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e736a970f?w=400&q=80",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80",
];

export default function InstagramFeed() {
  return (
    <SectionReveal className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="heading-underline font-playfair text-3xl text-navy">
            Find us @the.skylight.lounge
          </h2>
          <Link
            href={businessInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-gold hover:text-brown"
            aria-label="Instagram profile"
          >
            <Instagram size={22} />
            <span className="text-sm">Follow us</span>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          {placeholders.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded">
              {/* TODO: Replace with real photography */}
              <Image src={src} alt={`Instagram post ${i + 1}`} fill className="object-cover" sizes="200px" />
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
