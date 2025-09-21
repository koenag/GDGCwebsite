## GDGC Website

A modern website for the Google Developer Group on Campus (UCSC), built with:
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

### Getting started
- **Prerequisites**: Node.js 18+ and npm (uses `package-lock.json`)
- **Install**:
```bash
npm install
```
- **Run dev server**:
```bash
npm run dev
```
- **Build for production**:
```bash
npm run build
```
- **Start production server**:
```bash
npm start
```
- **Lint**:
```bash
npm run lint
```

### Project structure
```text
src/
  app/
    layout.tsx        # Root layout (fonts, Header, Footer)
    page.tsx          # Home → renders pages/Landing
    globals.css       # Tailwind v4 + theme tokens
    contact/page.tsx  # /contact
    team/page.tsx     # /team
    resources/page.tsx# /resources
    sponsors/page.tsx # /sponsors
    events/page.tsx   # /events
    pages/Landing.tsx # Landing content used by home
  components/
    Header.tsx        # Top navigation (desktop + mobile)
    Footer.tsx        # Footer with social links
    ui/button.tsx     # Reusable Button component
public/               # Static assets
next.config.ts        # Next.js config
postcss.config.mjs    # Tailwind v4 PostCSS plugin
eslint.config.mjs     # ESLint config
tsconfig.json         # TypeScript config
```

### Styling and theming
- Tailwind CSS v4 is enabled via `@tailwindcss/postcss`. Global styles and theme tokens live in `src/app/globals.css`.
- Brand colors (Google red/yellow/blue/green) and site tokens are defined with CSS variables under `@theme inline`.
- Fonts: `Geist` (via `next/font`) and `Manrope` (via Google Fonts import) are configured in `layout.tsx` / `globals.css`.

### Routes
- `/` — Landing page
- `/events` — Events (with Projects / Instruction / Socials submenu in header)
- `/sponsors` — Sponsors
- `/resources` — Resources
- `/team` — The Team
- `/contact` — Contact Us

### Customization
- Update navigation links or dropdowns in `src/components/Header.tsx`.
- Edit footer content and social links in `src/components/Footer.tsx`.
- Adjust brand colors, fonts, and theme tokens in `src/app/globals.css`.

### Notes
- No environment variables are required for local development by default.
- This repo uses strict TypeScript and Next.js ESLint rules.
