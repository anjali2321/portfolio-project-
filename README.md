# Anjali Chimata — Full Stack Developer Portfolio & ATS Resume

A modern, responsive developer portfolio built with **React, TypeScript, Tailwind CSS, Framer Motion, and Vite**, paired with a built-in **single-column, print-ready ATS Resume** backed by a single data file.

## Features

- **Dual-Mode Interface (`Portfolio` & `ATS Resume`)**: Switch cleanly between an interactive dark-mode portfolio and a crisp, single-column ATS-compliant resume layout.
- **Print / Export ATS PDF**: Dedicated `@media print` styling outputs a clean black-on-white PDF resume without UI chrome.
- **Single Source of Truth (`src/data/portfolio.ts`)**: Update your profile, categorized skills, professional experience, projects, education, and certifications in one typed TypeScript file.
- **SEO & Accessibility**: Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), accessible ARIA labels, Open Graph metadata, and Schema.org `Person` JSON-LD in `index.html`.
- **Automated CI (`ci.yml`)**: GitHub Actions runs `npm run lint` and `npm run build` on every Pull Request to `main`.

## Local Setup

```bash
npm install
npm run dev      # Start local dev server (http://localhost:5173)
npm run lint     # Run ESLint checks
npm run build    # Type-check with tsc -b and build production bundle
```

## Customizing Your Content

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to update your profile, skills, experience, projects, education, or certifications; both the web portfolio and ATS resume view update automatically.
