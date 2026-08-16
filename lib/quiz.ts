import { MenuCategory, MenuItem, menuItems } from "@/data/menu";

export type Mood = "energised" | "cosy" | "adventurous" | "indulgent";
export type Temperature = "hot" | "iced" | "surprise";
export type Craving = "coffee" | "matcha" | "wellness";

type QuizTag = NonNullable<MenuItem["quizTag"]>;

const moodToTag: Record<Mood, QuizTag> = {
  energised: "strong",
  cosy: "smooth",
  adventurous: "fresh",
  indulgent: "dessert",
};

const cravingToCategories: Record<Craving, MenuCategory[]> = {
  coffee: ["hot-coffee", "iced-coffee"],
  matcha: ["matcha"],
  wellness: ["wellness"],
};

function itemTemp(item: MenuItem): "hot" | "iced" | "both" {
  if (item.category === "hot-coffee") return "hot";
  if (item.category === "iced-coffee") return "iced";
  return item.quizTemp ?? "both";
}

function matchesTemp(item: MenuItem, temperature: Temperature): boolean {
  if (temperature === "surprise") return true;
  const temp = itemTemp(item);
  return temp === "both" || temp === temperature;
}

export function findDrinkForQuiz(
  mood: Mood,
  temperature: Temperature,
  craving: Craving
): MenuItem {
  const categories = cravingToCategories[craving];
  const pool = menuItems.filter(
    (item) => categories.includes(item.category) && matchesTemp(item, temperature)
  );

  const desiredTag = moodToTag[mood];
  let best = pool[0] ?? menuItems[0];
  let bestScore = -1;
  for (const item of pool) {
    const score = item.quizTag === desiredTag ? 1 : 0;
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return best;
}
