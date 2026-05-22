"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center grain-overlay bg-navy">
      {/* TODO: Replace with <video> hero.mp4 autoPlay muted loop */}
      {/* TODO: Replace with <video> hero.mp4 autoPlay muted loop */}
      <div className="absolute inset-0 bg-navy" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-playfair text-4xl font-medium leading-tight text-gold md:text-6xl lg:text-7xl"
        >
          Great coffee. Great events. Greater people.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 font-lora text-lg text-cream md:text-xl"
        >
          Bradford&apos;s favourite specialty coffee lounge.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/menu">Explore the Menu</Button>
          <Button href="/events" variant="outline">
            What&apos;s On
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#rating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce" size={32} />
      </motion.a>
    </section>
  );
}
