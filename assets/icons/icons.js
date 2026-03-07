// Arty duotone icon pack (single-file local bundle)
// Inspired by modern line icon packs with organic hand-drawn accents.

const ICONS = {
  brain: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M10.2 4.5c-1.5 0-2.8 1.2-2.8 2.8V8a2.6 2.6 0 0 0-2.2 2.6c0 1 .5 1.9 1.4 2.4a2.8 2.8 0 0 0 2.7 3.6h4.5a3 3 0 0 0 3-3V8.2a3.7 3.7 0 0 0-3.7-3.7h-2.9z"/>
    <path d="M9 8.5c0-1.5 1.2-2.7 2.7-2.7M8.1 11.1h2.2M13.6 8.9v7.3M15.4 10.5h1.6M9.4 13.8c.4 1 1.4 1.7 2.6 1.7"/>
  </svg>`,
  bolt: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M12.8 2.8L4.6 13.3h5.1l-1.2 7.9 10.8-11.5h-5.2l1.4-6.9z"/>
    <path d="M13 2.8 4.6 13.3h5.1l-1.2 7.9 10.8-11.5h-5.2z"/>
  </svg>`,
  accessibility: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle class="icon-fill" cx="12" cy="4.2" r="2.5"/>
    <path d="M5.8 9.3h12.4M12 8.8v10.5M8.2 20.3l3.8-4.8 3.8 4.8M8.4 10.6l1.1 4.3M15.6 10.6l-1.1 4.3"/>
  </svg>`,
  globe: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle class="icon-fill" cx="12" cy="12" r="8.8"/>
    <circle cx="12" cy="12" r="9.5"/>
    <path d="M2.9 12h18.2M12 2.5c2.4 2.2 3.7 5.8 3.7 9.5s-1.3 7.3-3.7 9.5M12 2.5C9.6 4.7 8.3 8.3 8.3 12s1.3 7.3 3.7 9.5"/>
  </svg>`,
  flame: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M12 2.5s-4.5 4.6-4.5 9.2c0 3.6 2 6.8 4.5 6.8s4.5-3.2 4.5-6.8C16.5 7 12 2.5 12 2.5z"/>
    <path d="M12 2.5s-4.5 4.6-4.5 9.2c0 3.6 2 6.8 4.5 6.8s4.5-3.2 4.5-6.8C16.5 7 12 2.5 12 2.5zM10 16.8c.4 1.3 1.2 2.2 2 2.2s1.6-.9 2-2.2"/>
  </svg>`,
  check: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M4.2 12.1 8.9 17l10.9-10.9-2.2-2.2-8.7 8.7-2.5-2.5z"/>
    <path d="M4.2 12.1 8.9 17l10.9-10.9"/>
  </svg>`,
  star: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="m12 2.7 2.7 5.5 6.1.9-4.4 4.2 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.2 6.1-.9z"/>
    <path d="m12 2.7 2.7 5.5 6.1.9-4.4 4.2 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.2 6.1-.9z"/>
  </svg>`,
  heart: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M12 20.7 4.2 13a4.9 4.9 0 0 1 0-6.9 4.8 4.8 0 0 1 6.8 0l1 1 1-1a4.8 4.8 0 0 1 6.8 0 4.9 4.9 0 0 1 0 6.9z"/>
    <path d="M12 20.7 4.2 13a4.9 4.9 0 0 1 0-6.9 4.8 4.8 0 0 1 6.8 0l1 1 1-1a4.8 4.8 0 0 1 6.8 0 4.9 4.9 0 0 1 0 6.9z"/>
  </svg>`,
  moon: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M14.8 2.7a9 9 0 1 0 6.5 15.8A9.6 9.6 0 0 1 14.8 2.7z"/>
    <path d="M21.3 18.5A9.5 9.5 0 1 1 14.8 2.7a9.6 9.6 0 0 0 6.5 15.8z"/>
  </svg>`,
  trophy: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M8 4.1h8v2.8c0 2.2-1.8 4-4 4s-4-1.8-4-4zm2.2 10.2h3.6v3h-3.6z"/>
    <path d="M8 4.1h8v2.8c0 2.2-1.8 4-4 4s-4-1.8-4-4zm-3.6 1h3.6m11.6 0h-3.6M7.4 20h9.2m-6.4-5.7h3.6v3h-3.6z"/>
  </svg>`,
  code: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M8.5 6 2.8 12l5.7 6 1.8-1.7L6.2 12l4.1-4.3zM15.5 6l5.7 6-5.7 6-1.8-1.7 4.1-4.3-4.1-4.3z"/>
    <path d="M8.5 6 2.8 12l5.7 6M15.5 6l5.7 6-5.7 6M13.5 4l-3 16"/>
  </svg>`,
  palette: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M12 2.5c-5.2 0-9.5 4.1-9.5 9.1s4.3 9 9.5 9h.8c1.3 0 2.4-1 2.4-2.3 0-.6-.2-1.1-.6-1.6-.6-.6-.8-1.2-.8-1.9 0-1.6 1.3-2.9 3-2.9h1c2 0 3.7-1.6 3.7-3.5 0-3.3-4.2-6-9.5-6z"/>
    <path d="M12 2.5c-5.2 0-9.5 4.1-9.5 9.1s4.3 9 9.5 9h.8c1.3 0 2.4-1 2.4-2.3 0-.6-.2-1.1-.6-1.6-.6-.6-.8-1.2-.8-1.9 0-1.6 1.3-2.9 3-2.9h1c2 0 3.7-1.6 3.7-3.5 0-3.3-4.2-6-9.5-6zM7.2 10.2h.1M10 7.7h.1M13.5 7.5h.1M16.2 10h.1"/>
  </svg>`,
  zap: `<svg class="art-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="icon-fill" d="M12.6 2.5 4.5 12.7H10L8.8 21.5l10.7-11.2H14L15.3 2.5z"/>
    <path d="M12.6 2.5 4.5 12.7H10L8.8 21.5l10.7-11.2H14z"/>
  </svg>`
};

// Function to inject icons into the document
function injectIcons() {
  // Replace emoji icons with SVG icons
  document.querySelectorAll('[data-icon]').forEach(el => {
    const iconName = el.getAttribute('data-icon');
    if (ICONS[iconName]) {
      el.innerHTML = ICONS[iconName];
    }
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectIcons);
} else {
  injectIcons();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ICONS;
}
