# Skylight Lounge

Production-ready marketing website for **Skylight Lounge** — specialty coffee, co-working, events & community in Bradford, UK.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion
- EmailJS (client-side forms)
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

1. **EmailJS** — Update `lib/emailjs.ts` with your `serviceId`, template IDs, and `publicKey`.
2. **Images** — Replace Unsplash placeholders (search for `TODO: Replace with real photography`).
3. **Hero video** — Add `hero.mp4` and swap the navy placeholder in `components/home/Hero.tsx`.
4. **Events** — Update `data/events.ts` with real posters and registration links.
5. **Artist** — Update `data/artist.ts` when the gallery wall rotates.
6. **Facebook** — Set the real URL in `data/info.ts`.

## Deploy

Deploy to [Vercel](https://vercel.com) with zero config — `next.config.ts` is ready for Unsplash remote images.
