// Shared navigation component
// Call renderNav(activeSection) where activeSection is one of:
// 'what-we-do' | 'solutions' | 'value' | 'insights' | 'about'
function renderNav(activeSection) {
  const links = [
    { id: 'what-we-do', label: 'What We Do', href: 'index.html', dropdown: null },
    { id: 'solutions', label: 'Solutions', href: 'solutions.html', dropdown: [
      { label: 'Our Products', href: 'solutions.html#products' },
      { label: 'How We Engage', href: 'solutions.html#engage' },
    ]},
    { id: 'value', label: 'Value', href: 'value.html', dropdown: null },
    { id: 'insights', label: 'Insights', href: 'insights.html', dropdown: [
      { label: 'White Paper', href: 'whitepaper.html' },
      { label: 'Technical Insights', href: 'insights-detail.html' },
    ]},
    { id: 'about', label: 'About', href: 'about.html', dropdown: null },
  ];

  const navHTML = `
  <nav id="main-nav" class="fixed top-0 w-full z-50 transition-all duration-300" style="background:rgba(13,20,26,0.72);backdrop-filter:blur(20px);">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
      <a href="index.html" class="flex items-center gap-3">
        <img src="assets/logo-axerra.svg" alt="Axerra" class="h-9 w-auto" onerror="this.style.display='none';this.nextSibling.style.display='block'"/>
        <span style="display:none;font-family:'Manrope',sans-serif;font-weight:900;font-size:1.3rem;color:#fff;letter-spacing:-0.03em;">AXERRA</span>
      </a>
      <div class="hidden md:flex items-center gap-8">
        ${links.map(l => {
          const isActive = l.id === activeSection;
          if (l.dropdown) {
            return `
            <div class="nav-dropdown relative group">
              <a href="${l.href}" class="flex items-center gap-1 font-headline tracking-tight font-bold text-xs uppercase transition-colors duration-200 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5' : 'text-slate-300 hover:text-cyan-300'}" style="font-family:'Manrope',sans-serif;">
                ${l.label}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mt-0.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <div class="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-[#0d141a] border border-[#404850]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                ${l.dropdown.map(d => `<a href="${d.href}" class="block px-5 py-3 text-xs font-label uppercase tracking-widest text-slate-400 hover:text-cyan-300 hover:bg-[#151c23] transition-colors">${d.label}</a>`).join('')}
              </div>
            </div>`;
          }
          return `<a href="${l.href}" class="font-headline tracking-tight font-bold text-xs uppercase transition-colors duration-200 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400 pb-0.5' : 'text-slate-300 hover:text-cyan-300'}" style="font-family:'Manrope',sans-serif;">${l.label}</a>`;
        }).join('')}
      </div>
      <div class="flex items-center gap-4">
        <a href="contact.html" class="bg-gradient-to-br from-[#00daf8] to-[#007d8f] text-[#00363f] font-bold text-xs uppercase tracking-wider px-6 py-2.5 transition-all hover:brightness-110" style="font-family:'Manrope',sans-serif;">Contact Us</a>
        <button id="mobile-menu-btn" class="md:hidden text-slate-300 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="square" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden bg-[#080f15] border-t border-[#404850]/20 px-8 py-4 space-y-3">
      ${links.map(l => `<a href="${l.href}" class="block text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-cyan-300 py-1" style="font-family:'Manrope',sans-serif;">${l.label}</a>`).join('')}
      ${links.filter(l=>l.dropdown).map(l => l.dropdown.map(d=>`<a href="${d.href}" class="block text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 py-1 pl-4">${d.label}</a>`).join('')).join('')}
    </div>
  </nav>`;

  document.currentScript
    ? document.currentScript.insertAdjacentHTML('beforebegin', navHTML)
    : document.body.insertAdjacentHTML('afterbegin', navHTML);
}
