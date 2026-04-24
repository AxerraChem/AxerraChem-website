# Axerra Website — Project Briefing

Read this file at the start of every session. It tells you what this project is,
how it's organized, and the rules you must follow before touching any code.

---

## What this project is

A marketing website for **Axerra** — a high-end chemical engineering company
specializing in oil & gas recovery chemistry. The site is dark-themed, technical
in tone, and targets industry professionals (engineers, asset managers, C-suite
at energy companies). It is a static HTML website — no frameworks, no backend,
no build tools. Every page is a plain `.html` file.

The audience is sophisticated. The design must feel precise and premium, never
generic or "startup-y."

---

## Folder structure

```
./
├── CLAUDE.md                  ← You are here
├── SKILL.md                   ← Design system and component reference
│
├── index.html                 ← Home page (What We Do)
├── about.html
├── contact.html
├── insights.html
├── Our_Products.html
├── How_We_Engage.html
├── Our_Clients.html
├── privacy.html
├── terms.html
├── value.html
├── viscosityeng.html          ← Insights article: Viscosity Engineering
│
├── assets/
│   ├── downloads/             ← Downloadable files (PDFs, whitepapers)
│   ├── fonts/                 ← Self-hosted font files (.woff2)
│   └── images/                ← All site images (flat — no subfolders)
│
├── css/
│   ├── fonts.css              ← @font-face rules for self-hosted fonts
│   └── global.css             ← Shared component styles
│
├── mockup/                    ← Original HTML mockup files — READ ONLY
└── references/                ← Component and section reference docs — READ ONLY
```

**Rules about this structure:**
- Never create files outside this structure without asking first
- Never rename or move existing files without asking first
- The `mockup/` and `references/` folders are read-only reference material — never edit those files
- New images always go into `assets/images/`
- New downloadable files always go into `assets/downloads/`

---

## Design system — non-negotiable rules

The full design system is in `.claude/skills/axerra-website/SKILL.md`.
Read that skill file whenever building or editing any HTML. The rules below
are the most critical and apply in every session without exception.

**Colors**
- Primary accent: `#00daf8` (cyan) — used for active states, CTAs, highlights
- Amber: `#ffba38` — secondary links and explore CTAs only
- Background: `#0d141a` — the page background, never change this
- Never introduce a new color not already in the Tailwind config
- Never use Tailwind's default color palette (blue-500, red-400, etc.) except
  for `text-slate-*` grays in the nav and footer, which are already established

**Typography**
- Three fonts only: Manrope (`font-headline`), Newsreader (`font-body`), Inter (`font-label`)
- Never introduce a fourth font
- Headlines are always `text-white`, body is `text-on-surface-variant`

**Corners and shape**
- Sharp corners only: `rounded-none` or `rounded-sm`
- Never use `rounded-lg`, `rounded-xl`, `rounded-2xl`, or `rounded-full` on layout elements

**External dependencies**
- Do not add any new external CDN links (no new script src, no new stylesheet href)
  without explicitly asking for permission first
- The goal is to eventually self-host everything — don't make that harder

---

## Page status tracker

Update this section as pages are completed.

| Page             | File                | Status          |
|------------------|---------------------|-----------------|
| What We Do       | index.html          | Not started     |
| Solutions        | solutions.html      | Not started     |
| Value            | value.html          | Not started     |
| Insights         | insights.html       | Not started     |
| About            | about.html          | Not started     |
| Contact          | contact.html        | Not started     |

---

## Decisions already made — do not revisit these

- Static HTML only. No React, Vue, Next.js, or any JS framework.
- Tailwind via CDN for now. Self-hosting will happen before launch.
- Google Fonts via CDN for now. Self-hosting will happen before launch.
- Material Symbols for icons (already loaded with fonts).
- No JavaScript frameworks — vanilla JS only for any interactions needed.
- Dark mode only — there is no light mode version of this site.

---

## How to behave in this project

**Before writing any HTML:**
1. Read the axerra-website skill file (`SKILL.md`) for the relevant components
2. Check the `mockups/` folder if a reference design exists for the page
3. Check the page status table above to understand what's built

**When making changes:**
- Make one section at a time — don't rewrite an entire page in one go
- After completing a section, pause and describe what you did before continuing
- Never delete existing code — comment it out and ask if it should be removed

**When uncertain:**
- Ask before adding anything not already in the design system
- Ask before creating any new file
- Ask before installing anything

**Code quality:**
- All HTML must be valid and well-indented
- Every `<img>` must have a descriptive `alt` attribute
- No inline styles except for Material Symbols font-variation-settings
- Keep each HTML file self-contained (styles in `<head>`, no external `.css`
  files needed until self-hosting phase)

---

## Self-hosting plan (pre-launch checklist)

When the site is ready to go live, complete these steps in order:

- [ ] Compile Tailwind CSS locally and replace CDN script with compiled file
- [x] Download Manrope, Newsreader, Inter as `.woff2` and place in `assets/fonts/`
- [x] Replace Google Fonts `<link>` with `@font-face` rules in `css/fonts.css`
- [ ] Replace Material Symbols CDN with self-hosted icon font or inline SVGs
- [ ] Test all pages with browser devtools set to offline mode
- [ ] Confirm zero external requests on page load
