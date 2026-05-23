"use client";

import NavyBg from "@/components/ui/NavyBg";
import SectionReveal from "@/components/ui/SectionReveal";
import {
  BookOpen,
  Coffee,
  Dices,
  EggFried,
  Lock,
  Monitor,
  Palette,
} from "lucide-react";

const experiences = [
  { icon: Coffee, label: "Specialty Coffee" },
  { icon: EggFried, label: "All Day Brunch" },
  { icon: Monitor, label: "Dual-Screen Workstations" },
  { icon: Lock, label: "Private Meeting Pod" },
  { icon: Palette, label: "Rotating Art Gallery" },
  { icon: Dices, label: "Board Games" },
  { icon: BookOpen, label: "Books & Cosy Corners" },
];

export default function ExperienceStrip() {
  return (
    <SectionReveal className="relative overflow-hidden py-16">
      <NavyBg />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-7 md:overflow-visible">
          {experiences.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-[140px] flex-shrink-0 flex-col items-center gap-3 text-center md:min-w-0"
            >
              <Icon className="text-gold" size={32} strokeWidth={1.5} aria-hidden="true" />
              <span className="font-sans text-sm text-cream">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
