import SectionReveal from "@/components/ui/SectionReveal";
import {
  Cookie,
  Leaf,
  Coffee,
  Sofa,
  Sun,
  Wifi,
} from "lucide-react";

const experiences = [
  { icon: Coffee, label: "Specialty Coffee" },
  { icon: Leaf, label: "Matcha Bar" },
  { icon: Cookie, label: "Fresh Bakes Daily" },
  { icon: Sofa, label: "Cosy Seating" },
  { icon: Wifi, label: "Free Wifi" },
  { icon: Sun, label: "Airy, Sunlit Space" },
];

export default function ExperienceStrip() {
  return (
    <SectionReveal className="bg-espresso py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible">
          {experiences.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-[140px] flex-shrink-0 flex-col items-center gap-3 text-center md:min-w-0"
            >
              <Icon className="text-brown" size={32} strokeWidth={1.5} aria-hidden="true" />
              <span className="font-sans text-sm text-cream">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
