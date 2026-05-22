import type { Metadata } from "next";
import EventsPage from "@/components/events/EventsPage";

export const metadata: Metadata = {
  title: "What's On",
};

export default function Events() {
  return <EventsPage />;
}
