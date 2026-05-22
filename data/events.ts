export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  cost: string;
  posterImage?: string;
  externalLink: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Games Night",
    date: "2026-06-20",
    time: "7:00 PM",
    cost: "Free",
    posterImage:
      "https://images.unsplash.com/photo-1611892440504-42a784e683d9?w=800&q=80",
    externalLink: "#",
  },
  {
    id: 2,
    title: "Networking Evening",
    date: "2026-06-28",
    time: "6:30 PM",
    cost: "£5",
    posterImage:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    externalLink: "#",
  },
  {
    id: 3,
    title: "Open Mic Night",
    date: "2026-07-05",
    time: "7:30 PM",
    cost: "Free",
    posterImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    externalLink: "#",
  },
  {
    id: 4,
    title: "Cultural Evening",
    date: "2026-04-12",
    time: "6:00 PM",
    cost: "£3",
    posterImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    externalLink: "#",
  },
];
