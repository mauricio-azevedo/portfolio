# Maurício Azevedo — Portfolio

Personal portfolio for Maurício Azevedo, Software Engineer.

A single-column, text-first page: experience, projects, skills and contact. Copy and links live in one typed data file, `src/data/portfolio.ts`, and the components lay it out.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4 (design tokens in `src/index.css`)
- Motion (entrance presets in `src/lib/motion.ts`)
- Animate UI components added through the shadcn CLI (`npx shadcn@latest add @animate-ui/<name>`); files under `src/components/animate-ui/` are kept as installed so they can be diffed against the registry

## Scripts

- `npm run dev` — local dev server
- `npm run check` — format check, lint and build; the pre-commit hook runs it and CI runs the same checks
