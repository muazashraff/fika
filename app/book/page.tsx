import type { Metadata } from "next";
import BookPage from "@/components/book/BookPage";

export const metadata: Metadata = {
  title: "Book",
};

export default function Book() {
  return <BookPage />;
}
