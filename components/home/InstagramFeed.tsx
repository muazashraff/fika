import SectionReveal from "@/components/ui/SectionReveal";
import { businessInfo } from "@/data/info";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TODO: Replace with real photography
const placeholders = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
  "https://images.unsplash.com/photo-1495856458515-0637185db551?w=400&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e736a970f?w=400&q=80",
];

export default function InstagramFeed() {
  return (
    <SectionReveal className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="heading-underline font-cormorant text-3xl text-espresso">
            Find us @fikacafebradford
          </h2>
          <Link
            href={businessInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-brown hover:text-espresso"
            aria-label="Instagram profile"
          >
            <Instagram size={22} />
            <span className="text-sm">Follow us</span>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          {placeholders.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded">
              <Image src={src} alt={`Instagram post ${i + 1}`} fill className="object-cover" sizes="200px" />
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
