import { businessInfo } from "@/data/info";
import { Star } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

export default function GoogleRatingBadge() {
  return (
    <SectionReveal className="bg-cream py-8">
      <div id="rating" className="mx-auto flex max-w-7xl justify-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/5 px-5 py-2.5 font-sans text-sm text-navy">
          <Star className="fill-gold text-gold" size={16} aria-hidden="true" />
          <span>
            <strong className="text-gold">{businessInfo.googleRating}</strong> on Google ·{" "}
            {businessInfo.googleReviewCount} reviews
          </span>
        </div>
      </div>
    </SectionReveal>
  );
}
