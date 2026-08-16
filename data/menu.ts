export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: MenuCategory;
  featured?: boolean;
}

export type MenuCategory =
  | "hot-coffee"
  | "iced-coffee"
  | "matcha"
  | "wellness"
  | "desserts"
  | "extras";

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "hot-coffee", label: "Hot Coffee" },
  { id: "iced-coffee", label: "Iced Coffee" },
  { id: "matcha", label: "Matcha" },
  { id: "wellness", label: "Wellness Drinks" },
  { id: "desserts", label: "Desserts & Bakes" },
  { id: "extras", label: "Extras" },
];

export const menuItems: MenuItem[] = [
  // ── HOT COFFEE ───────────────────────────────────────────────────────────
  { id: 1, name: "Espresso", price: "£2.80", category: "hot-coffee" },
  { id: 2, name: "Americano", price: "£3.00", category: "hot-coffee" },
  { id: 3, name: "Cortado", price: "£3.20", category: "hot-coffee" },
  { id: 4, name: "Flat White", price: "£3.60", category: "hot-coffee" },
  { id: 5, name: "Cappuccino", price: "£3.70", category: "hot-coffee" },
  { id: 6, name: "Latte", price: "£3.80", category: "hot-coffee" },
  { id: 7, name: "Mocha", price: "£4.50", category: "hot-coffee" },
  { id: 8, name: "Spanish Latte", price: "£4.80", category: "hot-coffee" },
  { id: 9, name: "Pistachio Latte", price: "£5.00", category: "hot-coffee", featured: true },
  { id: 10, name: "V60", price: "£5.20", category: "hot-coffee" },

  // ── ICED COFFEE ──────────────────────────────────────────────────────────
  { id: 11, name: "Iced Latte", price: "£5.00", category: "iced-coffee" },
  { id: 12, name: "Iced Pistachio Latte", price: "£5.20", category: "iced-coffee" },
  { id: 13, name: "Iced Tiramisu Latte", price: "£5.80", category: "iced-coffee", featured: true },
  { id: 14, name: "Iced Pour Over", price: "£6.00", category: "iced-coffee" },
  { id: 15, name: "Freddo Espresso", price: "£4.00", category: "iced-coffee" },
  { id: 16, name: "Freddo Cappuccino", price: "£5.00", category: "iced-coffee" },
  { id: 17, name: "Mont Blanc Coffee", price: "£5.50", category: "iced-coffee" },

  // ── MATCHA ───────────────────────────────────────────────────────────────
  { id: 18, name: "Matcha Latte", price: "£4.50", category: "matcha" },
  { id: 19, name: "Pistachio & White Chocolate Matcha", price: "£5.20", category: "matcha" },
  { id: 20, name: "Banana Bread Matcha", price: "£5.20", category: "matcha" },
  { id: 21, name: "Strawberry Matcha", price: "£5.20", category: "matcha" },
  { id: 22, name: "Strawberry Coconut Matcha", price: "£5.20", category: "matcha" },
  { id: 23, name: "Blueberry Matcha", price: "£5.20", category: "matcha" },
  { id: 24, name: "Blueberry & White Chocolate Matcha", price: "£5.20", category: "matcha" },
  { id: 25, name: "Matcha Blanc", price: "£5.20", category: "matcha" },
  { id: 26, name: "Watermelon Ice Tea Matcha Spritz", price: "£5.20", category: "matcha" },
  { id: 27, name: "Blueberry Matcha Spritz", price: "£5.20", category: "matcha" },

  // ── WELLNESS DRINKS ──────────────────────────────────────────────────────
  { id: 28, name: "Golden Hour", price: "£5.50", category: "wellness" },
  { id: 29, name: "The Palm", price: "£5.50", category: "wellness" },
  { id: 30, name: "J1", price: "£5.50", category: "wellness" },
  { id: 31, name: "Sunset Beach", price: "£5.50", category: "wellness" },
  { id: 32, name: "Hot Chocolate", price: "£4.50", category: "wellness" },
  { id: 33, name: "Luxury Hot Chocolate", price: "£12.00", category: "wellness", featured: true },

  // ── DESSERTS & BAKES ─────────────────────────────────────────────────────
  { id: 34, name: "Almond Croissant", price: "£4.00", category: "desserts" },
  { id: 35, name: "Brownie", price: "£3.50", category: "desserts" },
  { id: 36, name: "Kunafa Brownie", price: "£4.50", category: "desserts", featured: true },
  { id: 37, name: "Fika حلوى", price: "£8.00", category: "desserts" },
  { id: 38, name: "Chocolate Loaded Banana Bread", price: "£4.00", category: "desserts" },
  { id: 39, name: "Honey Toast", price: "£3.50", category: "desserts" },
  { id: 40, name: "Cookies", price: "£4.00", category: "desserts" },
  { id: 41, name: "Fresh Bakes", price: "See counter", category: "desserts" },

  // ── EXTRAS ───────────────────────────────────────────────────────────────
  { id: 42, name: "Syrups", price: "£0.50", category: "extras" },
  { id: 43, name: "Cold Foam", price: "£1.00", category: "extras" },
  { id: 44, name: "Honey", price: "£0.50", category: "extras" },
  { id: 45, name: "Extra Shot", price: "£1.00", category: "extras" },
];
