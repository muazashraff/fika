import BotanicalDivider from "@/components/ui/BotanicalDivider";
import SectionReveal from "@/components/ui/SectionReveal";
import { menuItems } from "@/data/menu";
import Link from "next/link";

export default function FeaturedDrinks() {
  const featured = menuItems.filter((d) => d.featured);

  return (
    <SectionReveal className="bg-beige py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="heading-underline text-center font-cormorant text-3xl text-espresso md:text-4xl">
          Fan favourites
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-brown/15 bg-cream p-6 transition-shadow hover:shadow-[0_8px_32px_rgba(139,99,67,0.12)]"
            >
              <span className="inline-block rounded bg-brown/10 px-2 py-0.5 font-sans text-xs font-semibold uppercase text-brown">
                Signature
              </span>
              <h3 className="mt-4 font-cormorant text-2xl text-espresso">{item.name}</h3>
              <p className="mt-4 font-sans font-semibold text-brown">{item.price}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/menu" className="font-sans text-brown hover:underline">
            View Full Menu →
          </Link>
        </p>
      </div>
      <BotanicalDivider />
    </SectionReveal>
  );
}
