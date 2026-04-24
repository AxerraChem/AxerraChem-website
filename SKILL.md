---
name: axerra-website
description: >
  Build, edit, or extend pages for the Axerra website — a dark-themed, high-end
  chemical engineering company site. Use this skill whenever the user asks to
  create a new page, add a section, build a component, or modify any HTML for
  the Axerra website. Trigger even for vague requests like "add a team page",
  "build the solutions section", or "make a contact form" — any web page work
  for this site should use this skill. The site uses Tailwind CSS (CDN), a
  specific dark color palette, and three Google Fonts (Manrope, Newsreader,
  Inter). Always match the existing design system exactly.
---

# Axerra Website Skill

This skill ensures every page and component built for Axerra is visually
consistent with the existing design. Read this file fully before writing any
HTML. For component-level detail, read the relevant reference file listed below.

## Reference files — read when relevant

- `references/components.md` — Navbar, footer, buttons, cards, forms, icons
- `references/sections.md` — Hero, insight cards, video sections, newsletter CTA
- `references/colors.md` — Full color token reference

---

## 1. Required external dependencies

Every page must include these in `<head>` in this exact order:

```html
<!-- Tailwind CSS with plugins -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>

<!-- Google Fonts (variable ranges — supports all weights) -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

> ⚠️ NOTE for self-hosting: The Tailwind CDN and Google Fonts are external
> dependencies. For production, download and self-host these files so the site
> doesn't break if those services go offline. See references/components.md for
> the self-hosting checklist.

---

## 2. Tailwind config — always include this script block

```html
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "on-surface-variant": "#bfc7d1",
          "on-primary": "#00363f",
          "secondary-fixed": "#c9e7f7",
          "surface-container-high": "#242b31",
          "surface-bright": "#333a41",
          "surface-variant": "#2f363c",
          "primary-fixed-dim": "#00daf8",
          "on-background": "#dce3ec",
          "surface-container-low": "#151c23",
          "primary-container": "#007d8f",
          "on-tertiary-container": "#fff5eb",
          "on-surface": "#dce3ec",
          "inverse-primary": "#006877",
          "error": "#ffb4ab",
          "tertiary": "#ffba38",
          "surface-container-lowest": "#080f15",
          "on-tertiary": "#432c00",
          "secondary": "#adcbda",
          "error-container": "#93000a",
          "outline-variant": "#404850",
          "secondary-container": "#304d5a",
          "primary": "#00daf8",
          "surface-dim": "#0d141a",
          "outline": "#8a919b",
          "on-secondary-container": "#9fbdcc",
          "surface-container-highest": "#2f363c",
          "surface": "#0d141a",
          "on-primary-container": "#e9faff",
          "on-error": "#690005",
          "on-secondary": "#163440",
          "surface-tint": "#00daf8",
          "surface-container": "#192027",
          "background": "#0d141a",
          "tertiary-container": "#976800"
        },
        borderRadius: {
          DEFAULT: "0.125rem",
          lg: "0.25rem",
          xl: "0.5rem",
          full: "0.75rem"
        },
        fontFamily: {
          headline: ["Manrope"],
          body: ["Newsreader"],
          label: ["Inter"]
        }
      }
    }
  }
</script>
```

---

## 3. Global CSS — always include this `<style>` block

```html
<style>
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    display: inline-block;
    line-height: 1;
  }
  body {
    background-color: #0d141a;
    color: #dce3ec;
  }
  .glass-panel {
    background: rgba(47, 54, 60, 0.6);
    backdrop-filter: blur(20px);
  }
  .signature-gradient {
    background: linear-gradient(135deg, #00daf8 0%, #007d8f 100%);
  }
  .ghost-border {
    border: 1px solid rgba(64, 72, 80, 0.15);
  }
  /* Top-fade used on nav over hero sections */
  .tonal-transition {
    background: linear-gradient(to bottom, #0d141a 0%, rgba(13, 20, 26, 0.8) 50%, transparent 100%);
  }
  /* Strip all borders, e.g. nav when using tonal-transition */
  .no-line { border: none !important; }
</style>
```

> ⚠️ **Naming note:** Page 2 also uses `.primary-gradient-glow` as an alias for the same gradient as `.signature-gradient`. Standardize on `.signature-gradient` in all new work to avoid duplication.

---

## 4. Body tag

`<html>` always requires `class="dark"`:
```html
<html class="dark" lang="en">
```

Body class varies by page type:
```html
<!-- Content/editorial pages (Insights, About) -->
<body class="font-body min-h-screen flex flex-col selection:bg-primary/30">

<!-- Marketing/landing pages (Home, Solutions, What We Do) -->
<body class="bg-surface text-on-surface font-label selection:bg-primary/30">
```
On landing pages `font-label` (Inter) is the base; sections override with `font-body` or `font-headline` as needed. On editorial pages `font-body` (Newsreader) is the base.

---

## 5. Typography rules

| Role      | Font      | Tailwind class   | Usage                              |
|-----------|-----------|------------------|------------------------------------|
| Headline  | Manrope   | `font-headline`  | H1, H2, nav links, buttons, labels |
| Body      | Newsreader| `font-body`      | Paragraphs, body copy (italic ok)  |
| Label     | Inter     | `font-label`     | Tags, captions, form inputs, meta  |

**Font weight conventions:**
- `font-extrabold` (800) — H1 page titles
- `font-bold` (700) — H2, H3, nav links, buttons
- `font-medium` / `font-normal` — body, labels

**Size scale used in existing pages:**
- H1: `text-5xl md:text-7xl` with `tracking-tighter`
- H2: `text-3xl` or `text-4xl md:text-5xl`
- H3: `text-2xl` or `text-3xl`
- Body large: `text-xl md:text-2xl` or `text-lg`
- Caption/tag: `text-xs` with `tracking-[0.2em] uppercase`

**Inline accent spans in headlines** — wrap key words in `<span class="text-primary">` or combine with italic:
```html
<h1>Unlocking <span class="text-primary italic">Trapped</span> Reserves Through <span class="text-primary">Precision Chemistry.</span></h1>
```

---

## 6. Color cheat sheet

| Token                      | Hex       | Use                                  |
|----------------------------|-----------|--------------------------------------|
| `primary` / `#00daf8`      | cyan      | Accents, active nav, CTA gradient    |
| `tertiary` / `#ffba38`     | amber     | Secondary links, "explore" CTAs      |
| `background` / `#0d141a`   | dark navy | Page background                      |
| `surface-container-low`    | `#151c23` | Card/section backgrounds             |
| `surface-container-lowest` | `#080f15` | Deep contrast sections, footer bg    |
| `surface-container`        | `#192027` | Input backgrounds                    |
| `on-surface-variant`       | `#bfc7d1` | Secondary body text                  |
| `on-surface`               | `#dce3ec` | Primary body text                    |
| `outline`                  | `#8a919b` | Dividers, muted text                 |
| `on-primary`               | `#00363f` | Text on gradient buttons             |
| `primary-container`        | `#007d8f` | Tonal CTA section backgrounds        |
| `on-primary-container`     | `#e9faff` | Text/elements on primary-container   |

---

## 7. Spacing & layout conventions

- Page max width: **`max-w-7xl mx-auto`** (recommended — standardize on this)
  > ⚠️ Page 1 uses `max-w-screen-2xl` and Page 2 uses `max-w-7xl`. Use `max-w-7xl` in all new work.
- Horizontal padding: `px-8`
- Main content top padding (below fixed nav): `pt-32` (or `pt-24` on full-screen hero pages)
- Bottom padding on main: `pb-20`
- Between major sections: `mb-32` or `py-32` on full-bleed sections
- Nav height: `h-20` (editorial) or `py-6` (landing/hero pages)

---

## 8. Key utility classes

```
.signature-gradient   — cyan-to-teal gradient, primary action buttons
.glass-panel          — frosted glass overlay (blur + dark tint)
.ghost-border         — very subtle border for card outlines
.tonal-transition     — vertical fade from dark to transparent, used on hero nav
.no-line              — removes all borders (used with tonal-transition on nav)
```

---

## 9. Icon system

Icons use **Material Symbols Outlined** loaded from Google Fonts.

```html
<span class="material-symbols-outlined">icon_name</span>
```

For filled icons, add inline style:
```html
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
```

Common icons used: `download`, `arrow_forward`, `play_arrow`, `hub`, `monitoring`, `deployed_code`, `biotech`, `handshake`, `verified_user`, `lan`, `science`

---

## 10. Page structure template

Every new page follows this skeleton:

**Editorial page** (e.g. Insights):
```html
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <!-- [Google Fonts link] -->
  <!-- [Tailwind CDN script] -->
  <!-- [Tailwind config script] -->
  <!-- [Global CSS style block] -->
</head>
<body class="font-body min-h-screen flex flex-col selection:bg-primary/30">
  <!-- [Navbar standard — from references/components.md] -->
  <main class="flex-grow pt-32 pb-20 px-8 max-w-7xl mx-auto w-full">
    <!-- [Page header, then sections] -->
  </main>
  <!-- [Footer — from references/components.md] -->
</body>
</html>
```

**Landing/marketing page** (e.g. Home, Solutions):
```html
<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <!-- same head as above -->
</head>
<body class="bg-surface text-on-surface font-label selection:bg-primary/30">
  <!-- [Navbar hero variant — from references/components.md] -->
  <main>
    <!-- Sections are full-bleed (no wrapper padding) — each section handles its own max-width -->
  </main>
  <!-- [Footer — from references/components.md] -->
</body>
</html>
```

---

## 11. Design principles — always follow these

1. **Dark first** — every color choice must work on the `#0d141a` dark background.
2. **Sharp corners** — `rounded-none` or `rounded-sm` only; never large border radii. Axerra uses precision, not softness.
3. **Cyan is primary** — `#00daf8` is the brand accent. Use it for active states, CTAs, and key highlights.
4. **Amber is secondary CTA** — `#ffba38` (`tertiary`) is used for explore/learn-more links.
5. **Typography contrast** — headlines are always `text-white`, body is `text-on-surface-variant`, labels are `text-outline` or `text-primary`.
6. **Subtle over loud** — use `opacity-*`, `mix-blend-luminosity`, and low-opacity overlays for image treatments.
7. **Spacing is generous** — sections have `mb-32`, headers have `mb-24`. Don't crowd the layout.
8. **Tracking on labels** — small uppercase labels always use `tracking-[0.2em]` or `tracking-widest`.
