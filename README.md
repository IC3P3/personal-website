# Personal Website

My personal portfolio site built with Astro and Tailwind CSS.

## Stack

- [Astro](https://astro.build) v6
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript
- pnpm

## Project Structure

```text
src/
├── components/       # Astro components
├── content/          # Markdown content collections
│   ├── experience/
│   ├── projects/
│   └── skills/
├── i18n/             # Locale strings
├── layouts/          # Page layouts
├── pages/            # Routes
├── scripts/          # TypeScript scripts
├── styles/           # Global styles
├── types/            # TypeScript types
└── content.config.ts # Content collection schemas
```

## Commands

| Command        | Action                             |
| :------------- | :--------------------------------- |
| `pnpm dev`     | Start dev server at localhost:4321 |
| `pnpm build`   | Build to ./dist/                   |
| `pnpm preview` | Preview the production build       |
| `pnpm format`  | Format with Prettier               |
| `pnpm lint`    | Lint with ESLint                   |
| `pnpm knip`    | Check for unused exports and files |
