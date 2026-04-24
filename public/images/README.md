# Images

Drop your real photos into this folder and they'll automatically replace the abstract placeholders used on the site.

## Expected files and slots

| Filename | Where it shows | Suggested content | Recommended size |
|---|---|---|---|
| `portrait.jpg` | Landing hero — big right-column portrait card | Clean headshot, shoulders up, neutral background, looking into camera | 1200 × 1500 (portrait orientation) |
| `about.jpg` | `/about` page — left column next to the backstory | Environment/candid shot — at a desk, on campus, pitching | 1200 × 1500 |
| `contact.jpg` | `/contact` page — optional full-width atmosphere | Wide, moody, dark-friendly (office, skyline, etc.) | 2000 × 1200 (landscape) |
| `moment-1.jpg` … `moment-6.jpg` | `/about` page — Moments gallery grid | Real moments: events, internships, teams, wins, travel | 1200 × 1500 (mixed orientations fine) |
| `teaser-about.jpg` | Home page — "About" teaser tile | Candid or environmental portrait | 1200 × 960 (landscape) |
| `teaser-skills.jpg` | Home page — "Skills" teaser tile | Work environment: laptop, charts, desk | 1200 × 960 |
| `teaser-education.jpg` | Home page — "Education" teaser tile | Campus, classroom, graduation, or book stack | 1200 × 960 |
| `teaser-contact.jpg` | Home page — "Contact" teaser tile | Phone, email setup, or another portrait | 1200 × 960 |

## After adding files

Open `lib/content.ts` and set the paths to match, for example:

```ts
export const images = {
  portrait: "/images/portrait.jpg",
  aboutPortrait: "/images/about.jpg",
  contactHero: "/images/contact.jpg",
  moments: [
    { src: "/images/moment-1.jpg", caption: "Campus — the sales lab" },
    // …
  ],
  teasers: {
    about: "/images/teaser-about.jpg",
    skills: "/images/teaser-skills.jpg",
    education: "/images/teaser-education.jpg",
    contact: "/images/teaser-contact.jpg",
  },
};
```

Slots left as empty strings (`""`) will continue to render the built-in abstract placeholders — which are intentional, not bugs, and look finished on their own.

## Tips

- JPG for photos, PNG if you need transparency. The site uses Next.js image optimization, so original files up to ~3 MB are fine.
- Keep resolutions at roughly 2× the largest displayed size for retina-sharp output.
- For the portrait, tight crop with a little headroom photographs best.
