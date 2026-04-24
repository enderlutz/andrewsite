# Andrew Bieh-Mintah — Portfolio

Personal branding site for Andrew Bieh-Mintah. Next.js 14 + TypeScript + Tailwind + Framer Motion. Multi-page with animated route transitions.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3001>.

## Routes

| Path | What's on it |
|---|---|
| `/` | Landing hero with portrait + 4 page-teaser tiles |
| `/about` | Long backstory + supporting portrait + inverted pull-quote + Moments gallery |
| `/skills` | Finance / Sales / Other skills, grouped |
| `/education` | Timeline of schools + highlights |
| `/contact` | Email / phone / LinkedIn / resume cards |

Animated page transitions (`app/template.tsx`) and a layout-animated active nav pill mean moving between pages feels like one continuous experience, not a reload.

## Adding pictures

Everything hooks through `lib/content.ts` + `/public/images/`. See [`public/images/README.md`](public/images/README.md) for the full list of slots and expected filenames.

**Quick version:**

1. Drop your JPGs into `/public/images/` using these names:
   - `portrait.jpg` — landing hero card
   - `about.jpg` — /about supporting shot
   - `contact.jpg` — optional /contact atmosphere
   - `moment-1.jpg` through `moment-6.jpg` — gallery on /about
2. Update `lib/content.ts` `images` object to point at them:
   ```ts
   images.portrait = "/images/portrait.jpg";
   images.moments[0].src = "/images/moment-1.jpg";
   // …
   ```
3. Any slot you leave as `""` keeps its abstract SVG placeholder — these are styled on purpose and look intentional until real photos arrive.

## Editing copy

All words live in `lib/content.ts`:

- `site` — name, role, email, phone, resume URL, portfolio URL, LinkedIn URL
- `backstory` — bio paragraphs
- `stats` — 4 number tiles on /about
- `skills.finance` / `.sales` / `.other` — skill pills
- `skillsMarquee` — words in the scrolling strip on /about
- `education` — schools array
- `pullQuote` — the big line in the dark /about section
- `images` — per-slot image paths

## Drop in resume + portfolio PDFs

Put the real files at:

- `public/resume.pdf` — linked from the Hero and Contact
- `public/portfolio.pdf` — linked from the Hero

Delete the `.placeholder` files next to them once the real ones are in.

## Deploy to Vercel (free)

1. Push this project to a new GitHub repo.
2. Go to <https://vercel.com/new>, import the repo, keep defaults (Framework: Next.js).
3. Click **Deploy** — live at `andrew-portfolio.vercel.app` (or similar) in about a minute.
4. Add a custom domain later from Vercel project settings.

No backend, no database, no Railway needed.

## Design notes

- **Palette**: cream (`#F7F5F0`) + ink (`#171717`) + orange accent (`#F25C29`).
- **Type**: Inter (UI) + Instrument Serif (display, with italic) — the sans/serif mix is what reads as "editorial."
- **Movement** (all Framer Motion):
  - Custom follow cursor with contextual labels via `data-cursor=""`.
  - Hero staggered word-reveal on load.
  - Scroll-triggered fade-ups (`<Reveal>` / `<Stagger>`).
  - Magnetic buttons that pull toward the cursor.
  - Inverted dark pull-quote section with scroll-driven word-by-word illumination + counter-scrolling marquees.
  - Layout-animated active nav pill that slides between pages.
  - Page-level fade + slide transition on every route change.

## File layout

```
app/
  layout.tsx                  # fonts, Cursor, Nav — shared across all pages
  template.tsx                # motion wrapper — re-renders on route change
  page.tsx                    # /
  about/page.tsx              # /about
  skills/page.tsx             # /skills
  education/page.tsx          # /education
  contact/page.tsx            # /contact
  globals.css
components/
  cursor.tsx                  # custom follow cursor
  magnetic.tsx                # magnetic hover wrapper
  marquee.tsx                 # infinite scrolling strip
  nav.tsx                     # sticky nav with active pill + mobile menu
  placeholder.tsx             # abstract SVG placeholders (image fallback)
  reveal.tsx                  # Reveal / Stagger / StaggerItem motion helpers
  smart-image.tsx             # next/image with placeholder fallback
  sections/
    hero.tsx                  # landing hero with portrait
    page-teasers.tsx          # landing route teaser grid
    about.tsx                 # /about backstory + portrait + stats
    pull-quote.tsx            # inverted dark scroll-reveal quote
    moments.tsx               # /about mosaic gallery
    skills.tsx
    education.tsx
    contact.tsx
lib/
  content.ts                  # ← edit site copy + image paths here
  utils.ts
public/
  images/                     # drop photos here — see its README
  resume.pdf                  # (replace placeholder)
  portfolio.pdf               # (replace placeholder)
```
