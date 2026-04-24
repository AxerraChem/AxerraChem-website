# Axerra — Component Reference

Copy these components verbatim onto new pages. Only change text content, not structure or classes.

---

## Navbar

Fixed, full-width, semi-transparent. The active nav item gets `text-[#00daf8] border-b-2 border-[#00daf8]`.
Change which item has the active class based on the current page.

```html
<nav class="fixed top-0 w-full z-50 bg-[#0d141a]/80 backdrop-blur-md transition-all duration-300">
  <div class="flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto">
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img alt="Axerra Logo" class="h-8 w-auto" src="[LOGO_URL]"/>
      <span class="text-2xl font-black tracking-tighter text-white font-headline">Axerra</span>
    </div>
    <!-- Nav links -->
    <div class="hidden md:flex items-center gap-8">
      <a class="font-headline tracking-tight font-bold text-sm text-slate-300 hover:text-white pb-1 transition-all duration-300" href="#">What we do</a>
      <a class="font-headline tracking-tight font-bold text-sm text-slate-300 hover:text-white pb-1 transition-all duration-300" href="#">Solutions</a>
      <a class="font-headline tracking-tight font-bold text-sm text-slate-300 hover:text-white pb-1 transition-all duration-300" href="#">Value</a>
      <a class="font-headline tracking-tight font-bold text-sm text-[#00daf8] border-b-2 border-[#00daf8] pb-1 transition-all duration-300" href="#">Insights</a><!-- ACTIVE PAGE -->
      <a class="font-headline tracking-tight font-bold text-sm text-slate-300 hover:text-white pb-1 transition-all duration-300" href="#">About</a>
    </div>
    <!-- CTA button -->
    <button class="signature-gradient text-on-primary font-headline text-sm font-bold px-6 py-2 rounded-sm scale-95 active:scale-90 transition-transform">
      Contact Us
    </button>
  </div>
</nav>
```

---

## Footer

Full-width, 4-column grid, very dark background (`#080f15`).

```html
<footer class="bg-[#080f15] w-full py-16 px-8 mt-auto">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
    <!-- Brand column -->
    <div class="md:col-span-1">
      <div class="flex items-center gap-3 mb-6">
        <img alt="Axerra Logo" class="h-6 w-auto" src="[LOGO_URL]"/>
        <span class="text-xl font-bold text-white font-headline">Axerra</span>
      </div>
      <p class="font-body text-slate-500 text-sm leading-relaxed">
        Precision Intelligence in Chemical Engineering. Delivering molecular excellence for complex energy challenges.
      </p>
    </div>
    <!-- Navigate column -->
    <div>
      <h4 class="font-headline font-bold text-white text-xs uppercase tracking-widest mb-6">Navigate</h4>
      <ul class="space-y-4 font-label text-sm">
        <li><a class="text-slate-500 hover:text-white transition-colors duration-200" href="#">What we do</a></li>
        <li><a class="text-slate-500 hover:text-white transition-colors duration-200" href="#">Solutions</a></li>
        <li><a class="text-slate-500 hover:text-white transition-colors duration-200" href="#">Value</a></li>
      </ul>
    </div>
    <!-- Knowledge column -->
    <div>
      <h4 class="font-headline font-bold text-white text-xs uppercase tracking-widest mb-6">Knowledge</h4>
      <ul class="space-y-4 font-label text-sm">
        <li><a class="text-[#00daf8] transition-colors duration-200" href="#">Insights</a></li>
        <li><a class="text-slate-500 hover:text-white transition-colors duration-200" href="#">About</a></li>
        <li><a class="text-slate-500 hover:text-white transition-colors duration-200" href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <!-- Connect column -->
    <div>
      <h4 class="font-headline font-bold text-white text-xs uppercase tracking-widest mb-6">Connect</h4>
      <p class="font-body text-slate-500 text-sm mb-4">Houston Technology Center<br/>TX 77002, United States</p>
      <div class="flex gap-4">
        <span class="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer transition-colors">hub</span>
        <span class="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer transition-colors">monitoring</span>
        <span class="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer transition-colors">deployed_code</span>
      </div>
    </div>
  </div>
  <!-- Copyright bar -->
  <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
    <p class="font-body text-slate-500 text-sm italic">© 2024 Axerra. Precision Intelligence in Chemical Engineering.</p>
    <div class="flex gap-8 font-label text-[10px] uppercase tracking-[0.2em] text-slate-600">
      <span>Terms of Service</span>
      <span>System Status</span>
    </div>
  </div>
</footer>
```

---

## Primary button (gradient)

```html
<button class="signature-gradient text-on-primary font-headline font-bold px-8 py-4 rounded-sm flex items-center gap-3 group">
  <span>Button Label</span>
  <span class="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">download</span>
</button>
```

## Secondary link (amber, underlined)

```html
<a class="inline-flex items-center gap-2 text-tertiary font-label font-bold uppercase tracking-widest text-xs border-b-2 border-tertiary pb-1 hover:text-white hover:border-white transition-colors group" href="#">
  Explore Link
  <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
```

## Section label / tag (above headings)

```html
<div class="flex items-center gap-2 mb-4">
  <div class="w-4 h-4 bg-primary rounded-none"></div>
  <span class="font-label text-xs tracking-[0.2em] uppercase text-primary font-medium">Section Tag Text</span>
</div>
```

## Email form (newsletter / contact)

```html
<form class="flex flex-col sm:flex-row gap-4">
  <input
    class="flex-grow bg-surface-container text-white border-b border-outline/30 focus:border-primary outline-none px-4 py-3 font-label text-sm transition-all rounded-none"
    placeholder="professional@email.com"
    type="email"
  />
  <button class="signature-gradient text-on-primary font-headline font-bold px-10 py-3 rounded-none uppercase text-xs tracking-widest" type="submit">
    Subscribe
  </button>
</form>
```

---

## Self-hosting checklist (for production)

When you're ready to take the site live and eliminate external dependencies:

1. **Tailwind CSS** — Run `npm install tailwindcss` and compile a custom build instead of using the CDN script. Your build will only include the classes you actually use (much smaller file).
2. **Google Fonts** — Visit [google-webfonts-helper.herokuapp.com](https://google-webfonts-helper.herokuapp.com), download Manrope, Newsreader, and Inter as `.woff2` files, place them in a `/fonts/` folder, and use `@font-face` in your CSS.
3. **Material Symbols** — Download the specific icons you use as SVG files from [fonts.google.com/icons](https://fonts.google.com/icons) and inline them, or self-host the icon font.

Once self-hosted, none of your dependencies rely on external servers.

---

## Navbar — hero/landing variant

Use on pages with a full-screen hero. The nav blends into the hero background using `.tonal-transition`.
Active link uses `text-cyan-400 border-b-2 border-cyan-400`. Nav links are UPPERCASE.

```html
<nav class="fixed top-0 w-full z-50 bg-[#0d141a]/60 backdrop-blur-xl no-line tonal-transition">
  <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
    <div class="text-2xl font-black tracking-tighter text-slate-100 font-headline">Axerra</div>
    <div class="hidden md:flex items-center space-x-10">
      <a class="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-headline tracking-tight font-semibold text-sm uppercase transition-colors duration-300" href="#">What we do</a><!-- ACTIVE -->
      <a class="text-slate-300 hover:text-cyan-300 font-headline tracking-tight font-semibold text-sm uppercase transition-colors duration-300" href="#">Solutions</a>
      <a class="text-slate-300 hover:text-cyan-300 font-headline tracking-tight font-semibold text-sm uppercase transition-colors duration-300" href="#">Value</a>
      <a class="text-slate-300 hover:text-cyan-300 font-headline tracking-tight font-semibold text-sm uppercase transition-colors duration-300" href="#">Insights</a>
      <a class="text-slate-300 hover:text-cyan-300 font-headline tracking-tight font-semibold text-sm uppercase transition-colors duration-300" href="#">About</a>
    </div>
    <button class="signature-gradient text-on-primary font-headline font-bold text-xs uppercase px-6 py-3 rounded-sm scale-95 active:scale-90 transition-transform">
      Contact Us
    </button>
  </div>
</nav>
```

---

## Section label — line variant (landing pages)

Alternative to the square-box label. Use on landing/marketing pages.

```html
<div class="flex items-center space-x-3 mb-6">
  <span class="w-8 h-[2px] bg-primary"></span>
  <span class="font-label text-xs tracking-widest uppercase text-primary font-bold">Section Tag</span>
</div>
```

---

## Amber bullet list

For feature/specification lists inside cards or sections.

```html
<ul class="space-y-3">
  <li class="flex items-center space-x-3">
    <span class="w-2 h-2 bg-tertiary"></span>
    <span class="font-label text-sm">Feature or specification</span>
  </li>
  <li class="flex items-center space-x-3">
    <span class="w-2 h-2 bg-tertiary"></span>
    <span class="font-label text-sm">Another item</span>
  </li>
</ul>
```

---

## Icon feature box

For 3-column service/capability grids. Icon in a translucent primary box above the text.

```html
<div class="space-y-6">
  <div class="w-12 h-12 bg-primary/10 flex items-center justify-center">
    <span class="material-symbols-outlined text-primary">biotech</span>
  </div>
  <h4 class="font-headline text-xl font-bold">Feature Title</h4>
  <p class="font-label text-sm leading-relaxed text-on-surface-variant">
    Description of this capability or service in 2–3 sentences.
  </p>
</div>
```

---

## Glass panel — icon badge (certification/compliance)

Centered icon with label below, used inside a grid alongside a feature list.

```html
<div class="glass-panel p-6 rounded-sm ghost-border">
  <div class="flex items-center justify-center h-32 text-primary">
    <span class="material-symbols-outlined text-6xl" style="font-variation-settings: 'FILL' 1;">verified_user</span>
  </div>
  <div class="text-center font-headline font-bold text-xs uppercase tracking-widest mt-4">Certified Compliance</div>
</div>
```

---

## Inverse button (dark on teal background)

Used inside `primary-container` CTA sections where the background is already teal.

```html
<button class="bg-surface text-primary font-headline font-black px-10 py-5 rounded-sm uppercase tracking-widest hover:scale-105 transition-transform">
  Start Technical Audit
</button>
```

---

## Footer — text-only variant (no logo image)

Use when no logo image asset is available. Footer column headings use `text-cyan-500`.

```html
<footer class="bg-[#080f15] w-full py-16 px-8 border-t border-slate-800/20">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
    <!-- Brand -->
    <div class="col-span-1">
      <div class="text-xl font-bold text-slate-200 font-headline mb-6">Axerra</div>
      <p class="font-body italic text-lg text-slate-500 leading-relaxed">
        Precision Engineering for Subsurface Excellence.
      </p>
    </div>
    <!-- Navigation -->
    <div class="col-span-1 space-y-4">
      <h5 class="font-headline text-xs font-bold uppercase tracking-widest text-cyan-500">Navigation</h5>
      <ul class="space-y-2">
        <li><a class="font-label text-sm text-slate-500 hover:text-slate-200 transition-all" href="#">What we do</a></li>
        <li><a class="font-label text-sm text-slate-500 hover:text-slate-200 transition-all" href="#">Solutions</a></li>
        <li><a class="font-label text-sm text-slate-500 hover:text-slate-200 transition-all" href="#">Value</a></li>
        <li><a class="font-label text-sm text-slate-500 hover:text-slate-200 transition-all" href="#">Insights</a></li>
      </ul>
    </div>
    <!-- Legal -->
    <div class="col-span-1 space-y-4">
      <h5 class="font-headline text-xs font-bold uppercase tracking-widest text-cyan-500">Legal &amp; Location</h5>
      <ul class="space-y-2">
        <li><a class="font-label text-sm text-slate-500 hover:text-slate-200 transition-all" href="#">Houston HQ</a></li>
        <li><a class="font-label text-sm text-slate-500 hover:text-slate-200 transition-all" href="#">Privacy Policy</a></li>
        <li><a class="font-label text-sm text-slate-500 hover:text-slate-200 transition-all" href="#">Terms of Service</a></li>
      </ul>
    </div>
    <!-- Connect -->
    <div class="col-span-1 space-y-4">
      <h5 class="font-headline text-xs font-bold uppercase tracking-widest text-cyan-500">Connect</h5>
      <button class="ghost-border w-full py-3 font-headline text-xs font-bold uppercase text-slate-200 hover:bg-surface-variant transition-colors">
        Contact Engineering
      </button>
    </div>
  </div>
  <!-- Copyright bar -->
  <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/20 flex flex-col md:flex-row justify-between items-center opacity-80">
    <p class="font-body italic text-lg text-slate-500 text-center md:text-left">
      © 2024 Axerra Intelligence. Precision Engineering for Subsurface Excellence.
    </p>
    <div class="flex space-x-6 mt-4 md:mt-0">
      <span class="material-symbols-outlined text-slate-500 hover:text-cyan-400 cursor-pointer">lan</span>
      <span class="material-symbols-outlined text-slate-500 hover:text-cyan-400 cursor-pointer">science</span>
      <span class="material-symbols-outlined text-slate-500 hover:text-cyan-400 cursor-pointer">hub</span>
    </div>
  </div>
</footer>
```
