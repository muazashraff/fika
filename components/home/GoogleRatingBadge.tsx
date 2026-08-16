"use client";

import { businessInfo } from "@/data/info";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Aisha R.",
    ago: "3 weeks ago",
    text: "The most beautiful café in Bradford, hands down. The pistachio latte is incredible and the space feels so calm and considered — every detail has been thought through.",
  },
  {
    name: "James H.",
    ago: "1 month ago",
    text: "Genuinely excellent specialty coffee. The V60 is brewed perfectly every time, and the interior is stunning — light, warm, minimal. My favourite spot to work from.",
  },
  {
    name: "Priya T.",
    ago: "2 months ago",
    text: "Came in for a matcha and stayed for two hours. The kunafa brownie is unreal. Such a calm, elegant space — Fika has completely raised the bar for cafés in Bradford.",
  },
  {
    name: "Mohammed K.",
    ago: "1 month ago",
    text: "Every visit feels like a little ritual. The staff are lovely, the bakes are always fresh, and the whole place just smells incredible. Highly recommend the honey toast.",
  },
  {
    name: "Sophie L.",
    ago: "6 weeks ago",
    text: "The wellness drinks menu is so creative — Golden Hour is my go-to. Beautifully designed space, thoughtful little details everywhere. It just feels special every time.",
  },
];

export default function GoogleRatingBadge() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  function go(next: number) {
    setDirection(next > index || (next === 0 && index === reviews.length - 1) ? 1 : -1);
    setIndex(next);
  }

  function prev() {
    setDirection(-1);
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }

  function next() {
    setDirection(1);
    setIndex((i) => (i + 1) % reviews.length);
  }

  return (
    <SectionReveal className="bg-cream py-10">
      {/* Rating pill */}
      <div id="rating" className="mx-auto flex max-w-7xl justify-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-brown/30 bg-beige px-5 py-2.5 font-sans text-sm text-espresso">
          <Star className="fill-brown text-brown" size={16} aria-hidden="true" />
          <span>
            <strong className="text-brown">{businessInfo.googleRating}</strong> on Google ·{" "}
            {businessInfo.googleReviewCount} reviews
          </span>
        </div>
      </div>

      {/* Review carousel */}
      <div
        className="mx-auto mt-8 max-w-2xl px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative overflow-hidden rounded-2xl border border-brown/15 bg-white px-8 py-7 shadow-sm">
          <Quote className="absolute left-5 top-5 text-brown/15" size={32} aria-hidden="true" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brown text-brown" aria-hidden="true" />
                ))}
              </div>

              {/* Review text */}
              <p className="mt-3 font-sans text-base italic leading-relaxed text-espresso/80">
                &ldquo;{reviews[index].text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brown/15 font-sans text-xs font-bold text-brown">
                  {reviews[index].name[0]}
                </div>
                <span className="font-sans text-sm font-semibold text-espresso">
                  {reviews[index].name}
                </span>
                <span className="font-sans text-xs text-espresso/40">· {reviews[index].ago}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="text-espresso/30 transition-colors hover:text-brown"
          >
            <ChevronLeft size={20} />
          </button>

          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-brown" : "w-1.5 bg-espresso/15"
              }`}
            />
          ))}

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="text-espresso/30 transition-colors hover:text-brown"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </SectionReveal>
  );
}
