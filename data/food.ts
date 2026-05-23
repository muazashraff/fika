export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "brunch" | "lunchy" | "sweet" | "extras";
  dietaryTags?: ("v" | "vg" | "gf")[];
  allergens?: string;
  addOns?: { name: string; price: number }[];
  variants?: { name: string; price: number }[];
}

export const foodItems: FoodItem[] = [
  // ── BRUNCH SPECIALS ──────────────────────────────────────────────────────
  {
    id: 1,
    name: "Full English",
    description:
      "Savour delicious meat sausages with 2 crispy hash browns, chestnut mushrooms, tomato and herb sauce, baked beans, and two fried farm eggs, served with toasted white bloomer.",
    price: 13.5,
    category: "brunch",
    allergens: "E, GF available",
    addOns: [
      { name: "Veggie swap — halloumi instead of sausages", price: 0 },
      { name: "Maple-glazed turkey bacon", price: 2.5 },
      { name: "Halloumi", price: 2.5 },
    ],
    variants: [
      { name: "Make it little — half portion of everything", price: 8.99 },
    ],
  },
  {
    id: 2,
    name: "Turkish Eggs",
    description:
      "Creamy thick greek garlic yogurt, with poached fresh farm eggs, topped with chilli oil, crushed lime & chilli pistachios. Served with harissa buttered bread.",
    price: 10.5,
    category: "brunch",
    dietaryTags: ["v"],
    allergens: "N, GF available, E",
    addOns: [
      { name: "Sujuk (spicy turkish sausage)", price: 2.5 },
      { name: "Halloumi", price: 2.5 },
    ],
  },
  {
    id: 3,
    name: "Ava go'",
    description:
      "Secret recipes smashed avo on two slices of bloomer, topped with crushed roasted chilli and lime pistachio and a tangy glaze.",
    price: 12.5,
    category: "brunch",
    dietaryTags: ["v"],
    allergens: "N, G",
    addOns: [
      { name: "Maple glazed bacon", price: 2.5 },
      { name: "Halloumi", price: 2.5 },
      { name: "Poached Egg", price: 1.5 },
    ],
  },
  {
    id: 4,
    name: "Fruity Granola Bowl",
    description:
      "Indulge in creamy, dreamy yogurt, topped with a crispy granola crown, a sprinkle of seeds and a splash of juicy seasonal fruit, all drizzled with our maple magic. A delightfully healthy choice!",
    price: 7.5,
    category: "brunch",
    dietaryTags: ["v"],
  },

  // ── MORE LUNCHY THAN BRUNCHIE ─────────────────────────────────────────────
  {
    id: 5,
    name: "The 'famous' Toastie",
    description:
      "The famous toastie that took our customers by storm. Made in our freshly baked cheese swirls, filled with 3 cheeses, marinated Sunkissed tomatoes including fresh mozzarella.",
    price: 7.7,
    category: "lunchy",
    dietaryTags: ["v"],
    allergens: "G",
    addOns: [
      { name: "Chilli cheese twist", price: 0.5 },
      { name: "Add chicken", price: 2.0 },
    ],
  },
  {
    id: 6,
    name: "Jacket Potato",
    description:
      "Crispy skin baked potatoes seasoned with butter, salt and pepper. Create your favourite combo.",
    price: 5.7,
    category: "lunchy",
    dietaryTags: ["v", "gf"],
    variants: [
      { name: "Cheddar & Mozzarella", price: 2.0 },
      { name: "Tuna Crunch", price: 1.99 },
      { name: "Spicy Chicken Mayo", price: 2.95 },
      { name: "Baked Beans", price: 2.0 },
    ],
  },
  {
    id: 7,
    name: "Chicky Club Sandwich",
    description:
      "A hearty, toasted sandwich packed with tender grilled chicken, turkey bacon, melted cheese, avocado and jalapeño filling. Fresh lettuce, ripe tomato, and a creamy house spread bring it all together for a bold, satisfying bite.",
    price: 10,
    category: "lunchy",
    variants: [{ name: "With Fries", price: 11 }],
  },
  {
    id: 8,
    name: "Southwest Loaded Fries",
    description:
      "A hearty pile of crunchy fries topped with tender chicken, warm cheese sauce, and jalapeños for just the right kick.",
    price: 10,
    category: "lunchy",
    dietaryTags: ["gf"],
  },
  {
    id: 9,
    name: "Pizza Wheel",
    description:
      "Made on our freshly baked cheese swirls, topped with our secret tomato sauce, cheesy cheddar and creamy mozzarella!",
    price: 6.5,
    category: "lunchy",
    dietaryTags: ["v"],
    allergens: "G",
  },
  {
    id: 10,
    name: "Chicken Caesar Salad",
    description:
      "Tenderly smoked chicken with zesty caesar drizzle, crispy turkey bacon sprinkles and focaccia croutons crowned with parmesan magic.",
    price: 10.5,
    category: "lunchy",
    allergens: "N, GF, E",
  },
  {
    id: 11,
    name: "Pollo Picante Pasta",
    description:
      "Creamy chicken pasta with fresh spinach, garlic and cheese, finished with a gentle spiced warmth for a rich, comforting kick. Served with fresh focaccia garlic bread.",
    price: 14.95,
    category: "lunchy",
  },

  // ── SWEET STUFF ───────────────────────────────────────────────────────────
  {
    id: 12,
    name: "Chef's Special French Toast",
    description:
      "Choose your delight — Nutella: thick, fluffy brioche with luscious cream. Or Crème Brûlée: butterscotch drizzle and cream on fluffy brioche with a torched brown sugar top.",
    price: 11.99,
    category: "sweet",
  },

  // ── EXTRAS ────────────────────────────────────────────────────────────────
  { id: 13, name: "Poached egg / Fried egg", description: "", price: 1.5, category: "extras" },
  { id: 14, name: "Halloumi", description: "", price: 2.5, category: "extras" },
  { id: 15, name: "Cheese", description: "", price: 1.9, category: "extras" },
  { id: 16, name: "Glazed turkey bacon", description: "", price: 2.5, category: "extras" },
  { id: 17, name: "Sausage", description: "", price: 2.5, category: "extras" },
];
