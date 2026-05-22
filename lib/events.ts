import { Event, events } from "@/data/events";

export type EventFilter = "all" | "week" | "month" | "past";

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function parseEventDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function isPastEvent(event: Event, today = new Date()): boolean {
  return startOfDay(parseEventDate(event.date)) < startOfDay(today);
}

export function isUpcoming(event: Event, today = new Date()): boolean {
  return !isPastEvent(event, today);
}

export function filterEvents(
  filter: EventFilter,
  today = new Date()
): Event[] {
  const now = startOfDay(today);

  if (filter === "past") {
    return events
      .filter((e) => isPastEvent(e, today))
      .sort(
        (a, b) =>
          parseEventDate(b.date).getTime() - parseEventDate(a.date).getTime()
      );
  }

  let filtered = events.filter((e) => isUpcoming(e, today));

  if (filter === "week") {
    const weekEnd = new Date(now);
    weekEnd.setDate(weekEnd.getDate() + 7);
    filtered = filtered.filter((e) => {
      const d = parseEventDate(e.date);
      return d >= now && d <= weekEnd;
    });
  } else if (filter === "month") {
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    filtered = filtered.filter((e) => {
      const d = parseEventDate(e.date);
      return (
        d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      );
    });
  }

  return filtered.sort(
    (a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()
  );
}

export function getUpcomingEvents(limit?: number, today = new Date()): Event[] {
  const upcoming = events
    .filter((e) => isUpcoming(e, today))
    .sort(
      (a, b) =>
        parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()
    );
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function formatEventDate(dateStr: string): string {
  return parseEventDate(dateStr).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
