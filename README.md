# Muhammad Usman Shakeel — Portfolio

Personal portfolio for **Muhammad Usman Shakeel**, Professional Web Developer.

## Stack

- Next.js (App Router)
- TypeScript
- CSS Modules + design tokens (“Ink & Signal”)
- `next/font` — Fraunces, Source Sans 3, IBM Plex Mono

## Status

Core build is complete (Phases 1–4 + launch polish). Remaining work is **your real content**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Launch checklist (needs your input)

| Item | Where |
|------|--------|
| Email | Done — `professional.muhammadusman@gmail.com` |
| GitHub URL | `src/content/profile.ts` → `social.github` |
| LinkedIn URL | `src/content/profile.ts` → `social.linkedin` |
| Resume PDF / URL | `src/content/profile.ts` → `resumeUrl` |
| Live domain | `src/content/profile.ts` → `url` |
| Exact job title | `src/content/experience.ts` |
| Real projects | `src/content/projects.ts` (+ screenshots in `public/images/projects/`) |
| Contact delivery | `.env.local` → `CONTACT_WEBHOOK_URL` |

Do **not** invent contact details, job titles, clients, or project results.

## Contact form delivery

1. Copy `.env.example` → `.env.local`
2. Set `CONTACT_WEBHOOK_URL` (Formspree, Make, Zapier, or your endpoint)
3. Restart the dev server

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/           # Routes, API, icons, OG image, SEO
  components/    # Layout, UI, sections
  content/       # Typed content modules
  lib/           # Shared validation helpers
  styles/        # Design tokens
```
