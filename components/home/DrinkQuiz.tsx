"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { MenuItem } from "@/data/menu";
import {
  Craving,
  findDrinkForQuiz,
  Mood,
  Temperature,
} from "@/lib/quiz";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const q1Options: { value: Mood; label: string }[] = [
  { value: "energised", label: "Energised" },
  { value: "cosy", label: "Cosy" },
  { value: "adventurous", label: "Adventurous" },
  { value: "indulgent", label: "Indulgent" },
];

const q2Options: { value: Craving; label: string }[] = [
  { value: "coffee", label: "Coffee" },
  { value: "matcha", label: "Matcha" },
  { value: "wellness", label: "Something Different" },
];

const q3Options: { value: Temperature; label: string }[] = [
  { value: "hot", label: "Hot" },
  { value: "iced", label: "Iced" },
  { value: "surprise", label: "Surprise me" },
];

export default function DrinkQuiz() {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState<Mood | null>(null);
  const [craving, setCraving] = useState<Craving | null>(null);
  const [temp, setTemp] = useState<Temperature | null>(null);
  const [result, setResult] = useState<MenuItem | null>(null);

  const reset = () => {
    setStep(0);
    setMood(null);
    setCraving(null);
    setTemp(null);
    setResult(null);
  };

  const pickMood = (m: Mood) => {
    setMood(m);
    setStep(1);
  };

  const pickCraving = (c: Craving) => {
    setCraving(c);
    setStep(2);
  };

  const pickTemp = (t: Temperature) => {
    setTemp(t);
    if (mood && craving) {
      setResult(findDrinkForQuiz(mood, t, craving));
    }
    setStep(3);
  };

  return (
    <SectionReveal className="bg-cream py-20">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <h2 className="heading-underline font-cormorant text-3xl text-espresso md:text-4xl">
          Not sure what to order? Let&apos;s find your drink.
        </h2>

        <div className="mt-10 rounded-lg bg-espresso p-6 text-left shadow-xl md:p-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <QuizStep key="q1" title="How are you feeling right now?">
                {q1Options.map((o) => (
                  <QuizButton key={o.value} onClick={() => pickMood(o.value)}>
                    {o.label}
                  </QuizButton>
                ))}
              </QuizStep>
            )}
            {step === 1 && (
              <QuizStep key="q2" title="What are you craving?">
                {q2Options.map((o) => (
                  <QuizButton key={o.value} onClick={() => pickCraving(o.value)}>
                    {o.label}
                  </QuizButton>
                ))}
              </QuizStep>
            )}
            {step === 2 && (
              <QuizStep key="q3" title="Hot or iced?">
                {q3Options.map((o) => (
                  <QuizButton key={o.value} onClick={() => pickTemp(o.value)}>
                    {o.label}
                  </QuizButton>
                ))}
              </QuizStep>
            )}
            {step === 3 && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="warm-glow rounded-lg border border-brown/40 p-6 text-center"
              >
                <p className="font-sans text-xs uppercase tracking-widest text-brown">
                  Your perfect match
                </p>
                <h3 className="mt-2 font-cormorant text-3xl text-cream">{result.name}</h3>
                <p className="mt-4 font-sans text-lg font-semibold text-brown">
                  {result.price}
                </p>
                <Link
                  href="/menu"
                  className="mt-6 inline-block font-sans text-sm text-brown underline hover:text-cream"
                >
                  See Full Menu →
                </Link>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 block w-full font-sans text-xs text-cream/60 hover:text-cream"
                >
                  Take quiz again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionReveal>
  );
}

function QuizStep({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      <h3 className="mb-6 font-cormorant text-2xl text-cream">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">{children}</div>
    </motion.div>
  );
}

function QuizButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded border border-brown/30 bg-espresso px-4 py-3 font-sans text-sm text-cream transition-colors hover:border-brown hover:bg-brown/15"
    >
      {children}
    </button>
  );
}
