"use client";

import BotanicalDivider from "@/components/ui/BotanicalDivider";
import NavyBg from "@/components/ui/NavyBg";
import { drinks, Drink } from "@/data/drinks";
import { foodItems, FoodItem } from "@/data/food";
import { useState } from "react";

type MainTab = "drinks" | "food";
type DrinkTab = "coffee" | "other" | "extras";
type FoodTab = "brunch" | "lunchy" | "sweet" | "extras";

const drinkTabs: { id: DrinkTab; label: string }[] = [
  { id: "coffee", label: "Coffee Beverages" },
  { id: "other", label: "Other Beverages" },
  { id: "extras", label: "Extras" },
];

const foodTabs: { id: FoodTab; label: string }[] = [
  { id: "brunch", label: "Brunch Specials" },
  { id: "lunchy", label: "More Lunchy Than Brunchie" },
  { id: "sweet", label: "Sweet Stuff" },
  { id: "extras", label: "Extras" },
];

export default function MenuPage() {
  const [mainTab, setMainTab] = useState<MainTab>("drinks");
  const [drinkTab, setDrinkTab] = useState<DrinkTab>("coffee");
  const [foodTab, setFoodTab] = useState<FoodTab>("brunch");

  const filteredDrinks = drinks.filter((d) => d.category === drinkTab);
  const filteredFood = foodItems.filter((f) => f.category === foodTab);

  return (
    <>
      <section className="relative overflow-hidden py-24 pt-32">
        <NavyBg />
        <div className="relative z-10">
          <h1 className="text-center font-playfair text-5xl text-gold md:text-6xl">
            Our Menu
          </h1>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="flex justify-center gap-8 border-b border-navy/10 pb-4">
            {(["drinks", "food"] as MainTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setMainTab(tab)}
                className={`font-sans text-lg capitalize transition-colors ${
                  mainTab === tab
                    ? "border-b-2 border-gold text-navy"
                    : "text-navy/50 hover:text-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {mainTab === "drinks" ? (
            <>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {drinkTabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setDrinkTab(t.id)}
                    className={`font-sans text-sm ${
                      drinkTab === t.id ? "text-gold underline" : "text-navy/60"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <ul className="mt-10 space-y-6">
                {filteredDrinks.map((item) => (
                  <DrinkRow key={item.id} item={item} />
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="mt-6 text-center font-lora text-sm italic text-brown">
                All food is served till 4pm. Toasties still available all day.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {foodTabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setFoodTab(t.id)}
                    className={`font-sans text-sm ${
                      foodTab === t.id ? "text-gold underline" : "text-navy/60"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <ul className="mt-10 space-y-8">
                {filteredFood.map((item) => (
                  <FoodRow key={item.id} item={item} />
                ))}
              </ul>
              <p className="mt-12 border-t border-navy/10 pt-8 font-lora text-xs leading-relaxed text-navy/70">
                Please make us aware of any allergies. Although care is taken, we cannot
                guarantee there is no cross contamination or that any of our products are
                allergen free.
              </p>
            </>
          )}
        </div>
      </section>
      <BotanicalDivider className="bg-cream" />
    </>
  );
}

function DrinkRow({ item }: { item: Drink }) {
  return (
    <li className="flex flex-wrap items-start justify-between gap-2 border-b border-navy/5 pb-4">
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-sans font-bold text-gold">{item.name}</span>
          {item.signature && (
            <span className="rounded bg-gold/15 px-2 py-0.5 font-sans text-[10px] uppercase text-gold">
              Signature
            </span>
          )}
        </div>
        <p className="mt-1 font-lora text-sm italic text-navy/60">{item.description}</p>
      </div>
      <span className="font-sans font-semibold text-gold">{item.price}</span>
    </li>
  );
}

function FoodRow({ item }: { item: FoodItem }) {
  return (
    <li className="border-b border-navy/5 pb-6">
      <div className="flex flex-wrap justify-between gap-2">
        <span className="font-sans font-bold text-navy">{item.name}</span>
        <span className="font-sans font-semibold text-gold">£{item.price.toFixed(2)}</span>
      </div>
      {item.description && (
        <p className="mt-1 font-lora text-sm italic text-navy/60">{item.description}</p>
      )}
      {item.dietaryTags && item.dietaryTags.length > 0 && (
        <div className="mt-2 flex gap-2">
          {item.dietaryTags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-gold/40 px-1.5 py-0.5 font-sans text-[10px] uppercase text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {item.allergens && (
        <p className="mt-1 font-sans text-xs text-navy/50">Allergens: {item.allergens}</p>
      )}
      {item.addOns && (
        <ul className="mt-2 space-y-1 font-sans text-xs text-navy/60">
          {item.addOns.map((a) => (
            <li key={a.name}>
              + {a.name} {a.price > 0 ? `(£${a.price.toFixed(2)})` : ""}
            </li>
          ))}
        </ul>
      )}
      {item.variants && (
        <ul className="mt-2 space-y-1 font-sans text-xs text-navy/60">
          {item.variants.map((v) => (
            <li key={v.name}>
              {v.name} — £{v.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
