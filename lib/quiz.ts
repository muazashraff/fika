import { Drink, drinks } from "@/data/drinks";

export type Mood = "energised" | "cosy" | "adventurous" | "indulgent";
export type Temperature = "hot" | "iced" | "surprise";
export type Flavour = "sweet" | "strong" | "spiced" | "smooth";

const moodToTag: Record<Mood, string> = {
  energised: "strong",
  cosy: "smooth",
  adventurous: "spiced",
  indulgent: "sweet",
};

export function findDrinkForQuiz(
  mood: Mood,
  temperature: Temperature,
  flavour: Flavour
): Drink {
  const desiredTags = [
    moodToTag[mood],
    flavour,
    ...(temperature !== "surprise" ? [temperature] : []),
  ];

  const scored = drinks.map((drink) => {
    const tags = drink.tags ?? [];
    const score = desiredTags.filter((t) =>
      tags.includes(t as (typeof tags)[number])
    ).length;
    return { drink, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.drink ?? drinks[0];
}
