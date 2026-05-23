import BotanicalDivider from "@/components/ui/BotanicalDivider";
import NavyBg from "@/components/ui/NavyBg";
import SectionReveal from "@/components/ui/SectionReveal";
import { drinks } from "@/data/drinks";
import Link from "next/link";

export default function FeaturedDrinks() {
  const featured = drinks.filter((d) => d.featured);

  return (
    <SectionReveal className="relative overflow-hidden py-20">
      <NavyBg />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="heading-underline text-center font-playfair text-3xl text-gold md:text-4xl">
          What&apos;s new at Skylight
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((drink) => (
            <article
              key={drink.id}
              className="rounded-lg border border-gold/20 bg-navy/50 p-6 transition-shadow hover:shadow-[0_8px_32px_rgba(201,168,76,0.15)]"
            >
              <span className="inline-block rounded bg-gold/20 px-2 py-0.5 font-sans text-xs font-semibold uppercase text-gold">
                Signature
              </span>
              <h3 className="mt-4 font-playfair text-xl text-cream">{drink.name}</h3>
              <p className="mt-2 font-lora text-sm italic text-cream/70">
                {drink.description}
              </p>
              <p className="mt-4 font-sans font-semibold text-gold">{drink.price}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/menu" className="font-sans text-gold hover:underline">
            View Full Menu →
          </Link>
        </p>
      </div>
      <BotanicalDivider />
    </SectionReveal>
  );
}
