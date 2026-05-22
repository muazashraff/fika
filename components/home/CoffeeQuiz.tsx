"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { Drink } from "@/data/drinks";
import {
  findDrinkForQuiz,
  Flavour,
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

const q2Options: { value: Temperature; label: string }[] = [
  { value: "hot", label: "Hot" },
  { value: "iced", label: "Iced" },
  { value: "surprise", label: "Surprise me" },
];

const q3Options: { value: Flavour; label: string }[] = [
  { value: "sweet", label: "Sweet" },
  { value: "strong", label: "Strong" },
  { value: "spiced", label: "Spiced" },
  { value: "smooth", label: "Smooth" },
];

export default function CoffeeQuiz() {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState<Mood | null>(null);
  const [temp, setTemp] = useState<Temperature | null>(null);
  const [flavour, setFlavour] = useState<Flavour | null>(null);
  const [result, setResult] = useState<Drink | null>(null);

  const reset = () => {
    setStep(0);
    setMood(null);
    setTemp(null);
    setFlavour(null);
    setResult(null);
  };

  const pickMood = (m: Mood) => {
    setMood(m);
    setStep(1);
  };

  const pickTemp = (t: Temperature) => {
    setTemp(t);
    setStep(2);
  };

  const pickFlavour = (f: Flavour) => {
    setFlavour(f);
    if (mood && temp) {
      setResult(findDrinkForQuiz(mood, temp, f));
    }
    setStep(3);
  };

  return (
    <SectionReveal className="bg-cream py-20">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <h2 className="heading-underline font-playfair text-3xl text-navy md:text-4xl">
          Not sure what to order? Let&apos;s find your drink.
        </h2>

        <div className="mt-10 rounded-lg bg-navy p-6 text-left shadow-xl md:p-10">
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
              <QuizStep key="q2" title="Hot or cold?">
                {q2Options.map((o) => (
                  <QuizButton key={o.value} onClick={() => pickTemp(o.value)}>
                    {o.label}
                  </QuizButton>
                ))}
              </QuizStep>
            )}
            {step === 2 && (
              <QuizStep key="q3" title="What's your flavour mood?">
                {q3Options.map((o) => (
                  <QuizButton key={o.value} onClick={() => pickFlavour(o.value)}>
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
                className="gold-glow rounded-lg border border-gold/50 p-6 text-center"
              >
                <p className="font-sans text-xs uppercase tracking-widest text-gold">
                  Your perfect match
                </p>
                <h3 className="mt-2 font-playfair text-2xl text-gold">{result.name}</h3>
                <p className="mt-3 font-lora text-sm italic text-cream/80">
                  {result.description}
                </p>
                <p className="mt-4 font-sans text-lg font-semibold text-gold">
                  {result.price}
                </p>
                <Link
                  href="/menu"
                  className="mt-6 inline-block font-sans text-sm text-gold underline hover:text-cream"
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
      <h3 className="mb-6 font-playfair text-xl text-cream">{title}</h3>
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
      className="rounded border border-gold/30 bg-navy px-4 py-3 font-sans text-sm text-cream transition-colors hover:border-gold hover:bg-gold/10"
    >
      {children}
    </button>
  );
}
