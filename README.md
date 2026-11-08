# Shadow Studio Labs — Website

Official website and policy hub for **Shadow Studio Labs**, a small studio that builds
lightweight mobile apps.

A static site built with **React + Vite + TypeScript + Tailwind CSS**. No backend,
no database, no authentication — deploy directly to Netlify.

## Getting started

```bash
npm install
npm run dev       # local development server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
```

## Routes

| Route          | Page                              |
| -------------- | --------------------------------- |
| `/`            | Home                              |
| `/apps`        | Apps listing                      |
| `/apps/fan`    | FAN — Virtual Breeze              |
| `/privacy`     | Privacy Policies hub              |
| `/privacy/fan` | FAN — Virtual Breeze Privacy Policy |
| `/contact`     | Contact                           |

## Project structure

```
src/
├── components/        Shared UI (Navbar, Footer, Container, cards, policy layout…)
├── pages/             One file per page
│   └── policies/      One file per privacy policy
├── data/
│   ├── apps.ts        Central app registry
│   └── site.ts        Site name, tagline, contact email
├── App.tsx            Router + layout
├── main.tsx
└── index.css          Tailwind entry + design tokens
public/
└── favicon.svg
```

## Adding a new app

1. **`src/data/apps.ts`** — add an object to the `apps` array (`name`, `slug`,
   `shortDescription`, `description`, `platform`, `status`, `privacyPath`, `features`).
   The Apps page, the Privacy hub and the generic `/apps/:slug` page all pick it up
   automatically.
2. **`src/pages/policies/`** — create the privacy policy page using the shared
   `PolicyLayout` and `PolicySection` components.
3. **`src/App.tsx`** — register the privacy policy route (e.g. `/privacy/your-app`).

That's it. The navbar, footer, and layout are shared, so no other changes are needed.

## Configuration

- **Contact email** — edit `email` in `src/data/site.ts`. It is used everywhere
  (contact page, policy contact sections) from that single location.
- **Brand accent color** — edit the `--color-accent*` tokens in `src/index.css`.
- **SEO titles/descriptions** — per-page, via the `Seo` component.

## Netlify

`netlify.toml` builds with `npm run build`, publishes `dist/`, and redirects all
routes to `index.html` so client-side routing works on direct visits.
