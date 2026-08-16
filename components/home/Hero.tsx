"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden grain-overlay bg-espresso">
      {/* Background image */}
      {/* TODO: Replace with real photography of the café */}
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-espresso/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-cormorant text-5xl font-medium leading-tight text-cream md:text-7xl lg:text-8xl"
        >
          Bradford&apos;s most beautiful café
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 font-sans text-lg text-cream/80 md:text-xl"
        >
          Specialty coffee, matcha and bakes on Thornton Road.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/menu">Explore the Menu</Button>
          <Button href="/book" variant="outline">
            Book a Table
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#rating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brown"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce" size={32} />
      </motion.a>
    </section>
  );
}
