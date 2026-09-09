# Portfolio

A modern personal portfolio built with React 18, Vite, TypeScript, TailwindCSS, Framer Motion, GSAP, and shadcn/ui (Radix). The UI uses a black/white gradient theme with red accents and advanced animations across sections (Hero, About, Projects, Skills, Certifications, Contact).

## Features
- Animated sections with Framer Motion and GSAP
- Vertical zigzag layouts for Projects and Certifications
- Typing text animations for project descriptions
- Command palette (Ctrl/⌘ + K) navigation
- Toast notifications and Sonner support
- Magnetic cursor and ambient glow effect
- Tailwind-driven theme with glassmorphism cards

## Tech Stack
- React 18 + Vite
- TypeScript
- TailwindCSS + tailwindcss-animate
- Framer Motion + GSAP
- Radix UI + shadcn/ui components
- React Router
- ESLint

## Requirements
- Node.js >= 18
- npm >= 9

## Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:5173)
npm run dev

# preview production build locally
npm run build
npm run preview

# lint the project
npm run lint
```

## Project Scripts
- `npm run dev` — start the Vite dev server
- `npm run build` — build production assets
- `npm run build:dev` — development-mode build (useful for preview/debug)
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Resume Download
The About section includes a “Download Resume” button. It expects a PDF at:

```
public/Yashpalsinghpawara_22bec139.pdf
```

If you prefer a different filename or path, update the logic in:
```
src/components/AboutSection.tsx
```
Search for `handleResumeDownload` and adjust the `filePath` accordingly.

## Notes
- Some animations trigger on scroll; ensure the page has enough content to see them.
- If the preview shows `net::ERR_NETWORK_CHANGED`, refresh the tab or restart the dev server; this happens with network/VPN changes or dev-server reloads.

## License
MIT

