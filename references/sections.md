# Axerra — Section Patterns Reference

Reusable full-section layouts. Mix and match these patterns to build any page.

---

## Page header (used at top of every content page)

```html
<header class="mb-24 max-w-3xl">
  <!-- Section tag -->
  <div class="flex items-center gap-2 mb-4">
    <div class="w-4 h-4 bg-primary rounded-none"></div>
    <span class="font-label text-xs tracking-[0.2em] uppercase text-primary font-medium">Section Tag</span>
  </div>
  <!-- H1 -->
  <h1 class="text-5xl md:text-7xl font-headline font-extrabold text-white tracking-tight mb-8">
    Page Title.
  </h1>
  <!-- Subtitle -->
  <p class="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-body italic">
    A compelling subtitle sentence that sets the tone.
  </p>
</header>
```

---

## Feature card (wide — image right, text left)

Used for whitepapers, deep insight series. 12-column grid, 7/5 split.

```html
<section class="mb-32">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-surface-container-low rounded-none overflow-hidden ghost-border">
    <!-- Text side -->
    <div class="lg:col-span-7 p-12 md:p-16 flex flex-col justify-center">
      <span class="font-label text-tertiary text-sm font-bold mb-4">SERIES LABEL | VOLUME 04</span>
      <h2 class="text-4xl font-headline font-bold text-white mb-6 leading-tight">
        Article or Report Title
      </h2>
      <p class="text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
        A 2–3 sentence description of the content, technical detail, and why it matters.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 items-start">
        <!-- Primary CTA -->
        <button class="signature-gradient text-on-primary font-headline font-bold px-8 py-4 rounded-sm flex items-center gap-3 group">
          <span>Download Whitepaper</span>
          <span class="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">download</span>
        </button>
        <!-- Meta info -->
        <div class="flex items-center gap-4 py-4">
          <div class="w-10 h-[1px] bg-outline"></div>
          <span class="font-label text-xs text-outline uppercase tracking-widest">PDF • 4.2 MB • 24 Pages</span>
        </div>
      </div>
    </div>
    <!-- Image side -->
    <div class="lg:col-span-5 relative min-h-[400px] bg-surface-container-high">
      <img alt="[Description]" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" src="[IMAGE_URL]"/>
      <div class="absolute inset-0 bg-gradient-to-l from-surface-container-high via-transparent to-transparent"></div>
      <!-- Volume number watermark -->
      <div class="absolute bottom-8 right-8 text-right">
        <div class="text-primary font-headline font-black text-6xl opacity-20">04</div>
        <div class="text-on-surface-variant font-label text-[10px] uppercase tracking-widest">Subtitle Label</div>
      </div>
    </div>
  </div>
</section>
```

---

## Two-column section (video/image left, text right)

Used for research articles, case studies.

```html
<section class="mb-32">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Media side -->
    <div class="order-2 md:order-1">
      <div class="aspect-video bg-surface-container-lowest relative overflow-hidden group ghost-border">
        <img alt="[Description]" class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-40" src="[IMAGE_URL]"/>
        <!-- Play button overlay -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 rounded-full glass-panel flex items-center justify-center cursor-pointer border border-primary/20 hover:bg-primary/20 transition-all">
            <span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Text side -->
    <div class="order-1 md:order-2">
      <h3 class="text-3xl font-headline font-bold text-white mb-6">
        Section Heading
      </h3>
      <div class="space-y-6">
        <p class="text-lg text-on-surface-variant leading-relaxed italic">
          "A pull quote or key insight in italic Newsreader."
        </p>
        <p class="text-md text-on-surface leading-relaxed font-body">
          Body copy explaining the research or topic in plain detail.
        </p>
        <!-- Amber explore link -->
        <a class="inline-flex items-center gap-2 text-tertiary font-label font-bold uppercase tracking-widest text-xs border-b-2 border-tertiary pb-1 hover:text-white hover:border-white transition-colors group" href="#">
          Explore Technical Briefing
          <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## Newsletter / CTA section (centered, dot grid background)

Always placed at the bottom of content pages, above the footer.

```html
<section class="bg-surface-container-lowest p-12 md:p-20 text-center relative overflow-hidden">
  <!-- Dot grid background texture -->
  <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #00daf8 1px, transparent 0); background-size: 40px 40px;"></div>
  </div>
  <div class="relative z-10 max-w-2xl mx-auto">
    <h2 class="text-3xl font-headline font-extrabold text-white mb-4">Stay at the cutting edge.</h2>
    <p class="text-on-surface-variant font-body text-lg mb-10">
      Receive monthly technical bulletins on molecular breakthroughs and industrial applications.
    </p>
    <form class="flex flex-col sm:flex-row gap-4">
      <input class="flex-grow bg-surface-container text-white border-b border-outline/30 focus:border-primary outline-none px-4 py-3 font-label text-sm transition-all rounded-none" placeholder="professional@email.com" type="email"/>
      <button class="signature-gradient text-on-primary font-headline font-bold px-10 py-3 rounded-none uppercase text-xs tracking-widest" type="submit">
        Subscribe
      </button>
    </form>
  </div>
</section>
```

---

## Stat / metric row

For pages that need data callouts.

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
  <div class="bg-surface-container-low p-8 ghost-border">
    <div class="text-4xl font-headline font-extrabold text-primary mb-2">22%</div>
    <div class="font-label text-xs text-on-surface-variant uppercase tracking-widest">Sweep Efficiency Gain</div>
  </div>
  <!-- repeat for other stats -->
</div>
```

---

## Simple text section (editorial, no media)

For About, methodology, or long-form content pages.

```html
<section class="mb-32 max-w-3xl">
  <h2 class="text-4xl font-headline font-bold text-white mb-8 leading-tight">Section Heading</h2>
  <div class="space-y-6">
    <p class="text-lg text-on-surface-variant leading-relaxed font-body">
      First paragraph of body copy.
    </p>
    <p class="text-lg text-on-surface-variant leading-relaxed font-body italic">
      A key insight or quote set in italic for visual variety.
    </p>
    <p class="text-lg text-on-surface-variant leading-relaxed font-body">
      Subsequent paragraph.
    </p>
  </div>
</section>
```

---

## Full-screen hero section (landing pages)

Full viewport height, background image with grayscale effect that lifts on hover. Left-aligned headline with gradient text overlay. Always the first section on marketing pages, sits directly under the hero-variant nav.

```html
<section class="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface-container-lowest">
  <!-- Background image -->
  <div class="absolute inset-0 z-0">
    <img class="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000" src="[IMAGE_URL]" alt="[Description]"/>
    <div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
  </div>
  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-8">
      <!-- Section label (line variant) -->
      <div class="flex items-center space-x-3 mb-6">
        <span class="w-8 h-[2px] bg-primary"></span>
        <span class="font-label text-xs tracking-widest uppercase text-primary font-bold">Section Tag</span>
      </div>
      <!-- H1 with inline accent spans -->
      <h1 class="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter mb-8">
        Headline with <span class="text-primary italic">Accent</span> Words in <span class="text-primary">Cyan.</span>
      </h1>
      <!-- Subtitle -->
      <p class="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl italic leading-relaxed mb-10">
        Italic Newsreader subtitle that supports the headline claim.
      </p>
      <!-- Dual CTAs -->
      <div class="flex flex-wrap gap-4">
        <button class="signature-gradient text-on-primary font-headline font-bold px-8 py-4 rounded-sm tracking-tight hover:brightness-110 transition-all">
          Primary Action
        </button>
        <button class="ghost-border text-on-surface font-headline font-bold px-8 py-4 rounded-sm tracking-tight hover:bg-surface-variant transition-all">
          Secondary Action
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## Bento / asymmetric capability grid

Unequal column spans create a magazine-style mosaic. Use for showcasing 2–3 key capabilities with images and descriptions. Column spans should add up to 12.

```html
<section class="py-32 bg-surface">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

      <!-- Tall feature card (7 cols) -->
      <div class="md:col-span-7 relative overflow-hidden rounded-sm bg-surface-container-low min-h-[500px] ghost-border">
        <img class="absolute inset-0 w-full h-full object-cover opacity-40" src="[IMAGE_URL]" alt="[Description]"/>
        <div class="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/60 to-transparent p-10 flex flex-col justify-end">
          <h3 class="font-headline text-3xl font-bold mb-4 tracking-tight">Capability Title</h3>
          <p class="font-body text-lg text-on-surface-variant leading-relaxed">
            2–3 sentence description of this capability.
          </p>
        </div>
      </div>

      <!-- Right column stacked (5 cols) -->
      <div class="md:col-span-5 flex flex-col gap-6">

        <!-- Image card (5 cols, short) -->
        <div class="relative overflow-hidden rounded-sm bg-surface-container-lowest min-h-[240px]">
          <img class="absolute inset-0 w-full h-full object-cover opacity-40" src="[IMAGE_URL]" alt="[Description]"/>
          <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent p-10 flex flex-col justify-end">
            <h3 class="font-headline text-2xl font-bold mb-2">Second Capability</h3>
            <p class="font-label text-sm text-on-surface-variant">Short one-line supporting text.</p>
          </div>
        </div>

        <!-- Feature list card (5 cols) -->
        <div class="bg-surface-container-low p-10 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center ghost-border">
          <div>
            <h3 class="font-headline text-3xl font-bold mb-4 tracking-tight">Third Capability</h3>
            <p class="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
              Supporting description.
            </p>
            <!-- Amber bullet list -->
            <ul class="space-y-3">
              <li class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-tertiary"></span>
                <span class="font-label text-sm">Feature one</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="w-2 h-2 bg-tertiary"></span>
                <span class="font-label text-sm">Feature two</span>
              </li>
            </ul>
          </div>
          <!-- Icon badge -->
          <div class="glass-panel p-6 rounded-sm ghost-border">
            <div class="flex items-center justify-center h-32 text-primary">
              <span class="material-symbols-outlined text-6xl" style="font-variation-settings: 'FILL' 1;">verified_user</span>
            </div>
            <div class="text-center font-headline font-bold text-xs uppercase tracking-widest mt-4">Badge Label</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
```

---

## 3-column icon feature section

For "why us" / partnership / methodology sections. Dark background, full-width.

```html
<section class="py-32 bg-surface-container-lowest relative">
  <div class="max-w-7xl mx-auto px-8 relative z-10">
    <!-- Section header -->
    <div class="max-w-3xl mb-20">
      <h2 class="font-headline text-4xl md:text-5xl font-bold mb-8">
        Section Heading with <span class="text-primary">Accent</span>
      </h2>
      <p class="font-body text-xl text-on-surface-variant italic">
        Supporting subtitle in italic Newsreader.
      </p>
    </div>
    <!-- 3-column icon grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="space-y-6">
        <div class="w-12 h-12 bg-primary/10 flex items-center justify-center">
          <span class="material-symbols-outlined text-primary">biotech</span>
        </div>
        <h4 class="font-headline text-xl font-bold">Feature Title</h4>
        <p class="font-label text-sm leading-relaxed text-on-surface-variant">Description of this feature in 2 sentences.</p>
      </div>
      <!-- Repeat for 2nd and 3rd items -->
    </div>
  </div>
</section>
```

---

## Tonal CTA section (primary-container background)

A bold full-width call-to-action with a teal background. Use at the bottom of landing pages before the footer. Includes a decorative glow blob.

```html
<section class="py-24 bg-primary-container relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
    <div class="mb-8 md:mb-0">
      <h2 class="font-headline text-3xl md:text-4xl font-black text-on-primary-container tracking-tighter mb-4">
        Your compelling CTA headline here?
      </h2>
      <p class="font-label text-on-primary-container/80 max-w-xl">
        One sentence of supporting context for the call to action.
      </p>
    </div>
    <!-- Inverse button — dark on teal -->
    <button class="bg-surface text-primary font-headline font-black px-10 py-5 rounded-sm uppercase tracking-widest hover:scale-105 transition-transform">
      Action Label
    </button>
  </div>
  <!-- Decorative glow blob -->
  <div class="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
</section>
```
