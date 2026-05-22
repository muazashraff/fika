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
  {
    id: 1,
    name: "Full English",
    description:
      "Savour delicious meat sausages with 2 crispy hash browns, chestnut mushrooms, tomato and herb sauce, baked beans, and two fried farm eggs, served with toasted white bloomer. Make it veggie — swap sausages for halloumi.",
    price: 12.99,
    category: "brunch",
    allergens: "G, E",
    addOns: [
      { name: "Maple-glazed turkey bacon", price: 2.5 },
      { name: "Halloumi", price: 2.5 },
    ],
  },
  {
    id: 2,
    name: "Turkish Eggs",
    description:
      "Creamy thick greek garlic yogurt, with poached fresh farm eggs, topped with chilli oil, crushed lime & chilli pistachios. Served with harrisa buttered bread.",
    price: 9.95,
    category: "brunch",
    dietaryTags: ["v"],
    allergens: "N, G, E",
    addOns: [
      { name: "Sujuk (spicy turkish sausage)", price: 0 },
      { name: "Halloumi", price: 0 },
    ],
  },
  {
    id: 3,
    name: "Breakfast Croissant",
    description:
      "Flaky croissant bursting with sausage, a crunchy hash browns, and a sunny fried egg, with a cheeky splash of ketchup and brown sauce.",
    price: 9.95,
    category: "brunch",
    allergens: "G, E",
    addOns: [
      { name: "Cheese", price: 1.9 },
      { name: "Maple glazed bacon", price: 2.5 },
    ],
  },
  {
    id: 4,
    name: "Ava go'",
    description:
      "Secret recipes smashed avo on bloomer, topped with crushed roasted chilli and lime pistachio and a tangy glaze.",
    price: 9.5,
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
    id: 5,
    name: "Cosy Oats",
    description:
      "A cozy, comforting oat bowl made with creamy oats and topped with a choice of drizzles either Honey, Rich maple syrup, Fruit or Dried nuts (50p per topping).",
    price: 4.5,
    category: "brunch",
    dietaryTags: ["v"],
    allergens: "G",
  },
  {
    id: 6,
    name: "The 'famous' Toastie",
    description:
      "The famous toastie that took our customers by storm. Made in our freshly baked cheese swirls, filled with 3 cheeses, marinated Sunkissed tomatoes including fresh mozzarella. Try it with a twist — the chilli cheese version at no extra cost.",
    price: 7.5,
    category: "lunchy",
    dietaryTags: ["v"],
    allergens: "G",
  },
  {
    id: 7,
    name: "Jacket Potato",
    description:
      "Crispy skin baked potatoes seasoned with butter, salt and pepper. Create your favourite combos.",
    price: 5.5,
    category: "lunchy",
    dietaryTags: ["v"],
    variants: [
      { name: "Cheddar & Mozzarella", price: 1.9 },
      { name: "Tuna Crunch", price: 1.99 },
      { name: "Spicy Chicken Mayo", price: 2.95 },
      { name: "Baked Beans", price: 1.9 },
      { name: "Or try these toppings in a Sarnie!", price: 2.5 },
    ],
  },
  {
    id: 8,
    name: "Chicky Club Sandwich",
    description:
      "A hearty, toasted sandwich packed with tender grilled chicken, turkey bacon, melted cheese, avocado and jalapeño filling. Fresh lettuce, ripe tomato, and a creamy house spread bring it all together for a bold, satisfying bite.",
    price: 8.5,
    category: "lunchy",
    variants: [{ name: "With Fries", price: 9.99 }],
  },
  {
    id: 9,
    name: "Southwest Loaded Fries",
    description:
      "A hearty pile of crunchy fries topped with tender chicken, warm cheese sauce, and jalapeños for just the right kick.",
    price: 7.99,
    category: "lunchy",
  },
  {
    id: 10,
    name: "Pizza Wheel",
    description:
      "Made on our freshly baked cheese swirls, topped with our secret tomato sauce, cheesy cheddar and creamy mozzarella!",
    price: 5.5,
    category: "lunchy",
    dietaryTags: ["v"],
    allergens: "G",
  },
  {
    id: 11,
    name: "Chef's Special French Toast",
    description:
      "Nutella delight — thick, fluffy brioche, delightfully springy, teaming up with luscious cream. OR Creme Brûlée — a butterscotch drizzle, cream, with a fluffy brioche with a torched brown sugar top.",
    price: 10.99,
    category: "sweet",
  },
  { id: 12, name: "Poached egg / Fried egg", description: "", price: 1.5, category: "extras" },
  { id: 13, name: "Halloumi", description: "", price: 2.5, category: "extras" },
  { id: 14, name: "Cheese", description: "", price: 1.9, category: "extras" },
  { id: 15, name: "Glazed turkey bacon", description: "", price: 2.5, category: "extras" },
  { id: 16, name: "Sausage", description: "", price: 2.5, category: "extras" },
];
