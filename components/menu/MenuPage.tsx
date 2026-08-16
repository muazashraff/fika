"use client";

import BotanicalDivider from "@/components/ui/BotanicalDivider";
import { MenuItem, menuCategories, menuItems } from "@/data/menu";
import { useState } from "react";

export default function MenuPage() {
  const [tab, setTab] = useState(menuCategories[0].id);
  const filtered = menuItems.filter((item) => item.category === tab);

  return (
    <>
      <section className="bg-espresso py-24 pt-32">
        <div className="relative z-10">
          <h1 className="text-center font-cormorant text-5xl text-cream md:text-6xl">
            Our Menu
          </h1>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-b border-brown/15 pb-6">
            {menuCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setTab(c.id)}
                className={`font-sans text-sm transition-colors ${
                  tab === c.id ? "text-brown underline underline-offset-4" : "text-espresso/50 hover:text-espresso"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <ul className="mt-10 space-y-5">
            {filtered.map((item) => (
              <MenuRow key={item.id} item={item} />
            ))}
          </ul>

          <p className="mt-12 border-t border-brown/15 pt-8 font-sans text-xs leading-relaxed text-espresso/60">
            Please make us aware of any allergies. Although care is taken, we cannot
            guarantee there is no cross contamination or that any of our products are
            allergen free.
          </p>
        </div>
      </section>
      <BotanicalDivider className="bg-cream" />
    </>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brown/10 pb-4">
      <span className="font-cormorant text-xl text-espresso">{item.name}</span>
      <span className="font-sans font-semibold text-brown">{item.price}</span>
    </li>
  );
}
