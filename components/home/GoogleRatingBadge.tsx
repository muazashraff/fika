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
    text: "Honestly one of the best coffee shops I've ever been to. The Spanish latte is out of this world and the vibe is so warm and welcoming. Skylight feels like a proper community hub — Bradford needed this.",
  },
  {
    name: "James H.",
    ago: "1 month ago",
    text: "Best specialty coffee in Bradford, no question. The baristas genuinely know their craft — my flat white is perfect every single time. The space is gorgeous too. I come here to work at least twice a week.",
  },
  {
    name: "Priya T.",
    ago: "2 months ago",
    text: "The famous toastie is everything people say it is. Came in for coffee and stayed for two hours. Such a cosy, beautiful space. The matcha is incredible as well — can't recommend it enough.",
  },
  {
    name: "Mohammed K.",
    ago: "1 month ago",
    text: "Attended the Chaand Raat event here and it was absolutely magical. Amazing atmosphere, brilliant food, great coffee, and such a genuine sense of community. Skylight is Bradford's hidden gem.",
  },
  {
    name: "Sophie L.",
    ago: "6 weeks ago",
    text: "I've tried every coffee shop in Bradford and nothing comes close. The drinks menu is creative without being gimmicky, the service is always lovely, and it just feels special every time you walk in.",
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
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/5 px-5 py-2.5 font-sans text-sm text-navy">
          <Star className="fill-gold text-gold" size={16} aria-hidden="true" />
          <span>
            <strong className="text-gold">{businessInfo.googleRating}</strong> on Google ·{" "}
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
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-white px-8 py-7 shadow-sm">
          <Quote className="absolute left-5 top-5 text-gold/20" size={32} aria-hidden="true" />

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
                  <Star key={i} size={14} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Review text */}
              <p className="mt-3 font-lora text-base italic leading-relaxed text-navy/80">
                &ldquo;{reviews[index].text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 font-sans text-xs font-bold text-gold">
                  {reviews[index].name[0]}
                </div>
                <span className="font-sans text-sm font-semibold text-navy">
                  {reviews[index].name}
                </span>
                <span className="font-sans text-xs text-navy/40">· {reviews[index].ago}</span>
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
            className="text-navy/30 transition-colors hover:text-gold"
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
                i === index ? "w-5 bg-gold" : "w-1.5 bg-navy/20"
              }`}
            />
          ))}

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="text-navy/30 transition-colors hover:text-gold"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </SectionReveal>
  );
}
