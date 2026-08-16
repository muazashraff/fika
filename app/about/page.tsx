import SectionReveal from "@/components/ui/SectionReveal";
import { Coffee, Heart, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  { icon: Coffee, title: "Craft", emoji: "☕" },
  { icon: Leaf, title: "Quality Ingredients", emoji: "🌿" },
  { icon: Sparkles, title: "Considered Design", emoji: "✨" },
  { icon: Heart, title: "Warm Hospitality", emoji: "🤍" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-20 pt-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              {/* TODO: Replace with real photography of the café */}
              <Image
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80"
                alt="Inside Fika Café"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-brown">Our Story</p>
              <h1 className="mt-3 font-cormorant text-4xl text-espresso md:text-5xl">
                Bradford&apos;s most beautiful café
              </h1>
              <blockquote className="mt-6 border-l-4 border-brown pl-4 font-cormorant text-lg italic text-espresso/80">
                &ldquo;We didn&apos;t just want to open a café. We wanted to build a
                place to slow down.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <SectionReveal className="bg-espresso py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="border-l-4 border-brown pl-4 font-cormorant text-2xl text-brown">
            The Fika Story
          </h2>
          <div className="mt-8 space-y-6 font-sans leading-relaxed text-cream/85">
            <p>
              Fika began with a simple idea: to bring the Swedish tradition of fika — taking
              a proper pause for coffee and something sweet, shared with good company — to
              Thornton Road in Bradford.
            </p>
            <p>
              We source specialty coffee, build our own matcha and wellness drinks in-house,
              and bake fresh every day. The space is designed to feel calm and airy — cream
              walls, warm wood, plenty of light — a place that invites you to stay a while.
            </p>
            <p>
              Whether you&apos;re stopping in for an espresso on the way to work or settling
              in with a matcha and a brownie for the afternoon, Fika is here for the pause in
              your day.
            </p>
            <p className="font-cormorant text-xl italic text-brown">
              Welcome to Fika. Take a moment.
            </p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="mb-12 text-center font-cormorant text-3xl text-espresso">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-brown/15 bg-white p-6 text-center">
                <span className="text-2xl" aria-hidden="true">{v.emoji}</span>
                <v.icon className="mx-auto mt-3 text-brown" size={28} />
                <h3 className="mt-4 font-sans font-semibold text-espresso">{v.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
