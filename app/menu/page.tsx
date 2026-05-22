import type { Metadata } from "next";
import MenuPage from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Our Menu",
};

export default function Menu() {
  return <MenuPage />;
}
