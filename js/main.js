// Graphly Design System - Enhanced Interactivity
// Modern design patterns and user interactions

document.addEventListener('DOMContentLoaded', function () {
  // Initialize all interactive elements
  initializeColorSwatches();
  initializeCopyToClipboard();
  initializeAnimations();
  initializeNavigation();
  initializeMobileNav();
});

/**
 * Color Swatch Interaction
 * Allow users to click and copy color values
 */
function initializeColorSwatches() {
  // Only apply JS hover scaling to elements that do not have their own CSS hover animation.
  const swatches = document.querySelectorAll('[data-color]');

  swatches.forEach(swatch => {
    // Add visual feedback on hover
    swatch.style.cursor = 'pointer';

    swatch.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.02)';
    });

    swatch.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
}

/**
 * Copy to Clipboard Helper
 * Add click handlers to hex codes and color values
 */
function initializeCopyToClipboard() {
  const hexCodes = document.querySelectorAll('.hsr-hex, .sw-hex, .sc-hex, .n-hex, .dm-sw-hex, .dh, .dsh');

  hexCodes.forEach(hex => {
    hex.style.cursor = 'pointer';
    hex.style.userSelect = 'none';

    const originalText = hex.textContent;

    hex.addEventListener('click', function (e) {
      e.stopPropagation();

      // Extract hex value
      const hexMatch = this.textContent.match(/#[A-Fa-f0-9]{6}/);
      if (hexMatch) {
        const hexValue = hexMatch[0];
        copyToClipboard(hexValue);

        // Visual feedback
        const originalColor = this.style.color;
        this.style.color = 'var(--indigo-500)';
        this.style.fontWeight = '600';

        // Show toast message
        showToast(`Copied ${hexValue}!`);

        setTimeout(() => {
          this.style.color = originalColor;
          this.style.fontWeight = '';
        }, 1500);
      }
    });
  });
}

/**
 * Smooth Scroll Animations
 * Fade in elements as they come into view
 */
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections
  const elements = document.querySelectorAll(
    '.sci-card, .sw-card, .sem-card, .psych-card, .ct-card, .dm-sw'
  );

  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}

/**
 * Navigation and Scroll Behavior
 * Smooth section navigation
 */
function initializeNavigation() {
  // Smooth scroll behavior for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
    });
  });

  // Add scroll indicator
  updateScrollIndicator();
  window.addEventListener('scroll', updateScrollIndicator);
}

/**
 * Scroll Progress Indicator
 * Visual feedback for page scroll position
 */
function updateScrollIndicator() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Update color bar at top
  const colorBar = document.querySelector('.color-bar');
  if (colorBar) {
    colorBar.style.position = 'fixed';
    colorBar.style.top = '0';
    colorBar.style.left = '0';
    colorBar.style.right = '0';
    colorBar.style.zIndex = '1000';
    colorBar.style.height = '3px';
  }
}

/**
 * Utility: Copy to Clipboard
 */
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .catch(err => console.error('Failed to copy:', err));
  } else {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

/**
 * Utility: Toast Notification
 */
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(18,18,32,.92);
    color: rgba(255,255,255,.95);
    padding: 12px 18px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.1);
    font-family: var(--ff-body);
    font-size: 13px;
    font-weight: 500;
    box-shadow: 0 10px 24px rgba(0,0,0,.18);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 2000);
}



/**
 * Mobile Navigation Dropdown Logic
 * The dropdown is position:fixed and placed by JS to sit above the three-dots button.
 */
function initializeMobileNav() {
  const moreBtn = document.querySelector('.nav-more-btn');
  const dropdown = document.getElementById('nav-dropdown');

  if (!moreBtn || !dropdown) return;

  function positionDropdown() {
    const rect = moreBtn.getBoundingClientRect();
    // Align right edge of dropdown to right edge of button
    const right = window.innerWidth - rect.right;
    // Place dropdown above the button with a small gap
    const bottom = window.innerHeight - rect.top + 10;
    dropdown.style.right = right + 'px';
    dropdown.style.bottom = bottom + 'px';
    dropdown.style.left = 'auto';
    dropdown.style.top = 'auto';
  }

  function openDropdown() {
    positionDropdown();
    dropdown.classList.add('active');
    dropdown.setAttribute('aria-hidden', 'false');
    moreBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    dropdown.classList.remove('active');
    dropdown.setAttribute('aria-hidden', 'true');
    moreBtn.setAttribute('aria-expanded', 'false');
  }

  // Toggle on button tap/click
  moreBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('active');
    isOpen ? closeDropdown() : openDropdown();
  });

  // Close when clicking/tapping anywhere outside
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target) && !moreBtn.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close on link click and scroll smoothly
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
      closeDropdown();
    });
  });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    copyToClipboard,
    showToast,
    initializeColorSwatches,
    initializeCopyToClipboard,
    initializeAnimations,
    initializeNavigation
  };
}


// Track whether the nav should be dark or light based on the current background behind it.
// This keeps the glass nav readable as the page content changes.
function initializeNavThemeObserver() {
  const nav = document.querySelector('.site-nav');
  const hero = document.querySelector('.hero');
  if (!nav || !hero) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nav.classList.add('nav-dark');
          nav.classList.remove('nav-light');
        } else {
          nav.classList.add('nav-light');
          nav.classList.remove('nav-dark');
        }
      });
    },
    {
      rootMargin: '-80px 0px 0px 0px',
      threshold: 0
    }
  );

  observer.observe(hero);
}

initializeNavThemeObserver();

// Initialize back-to-top button visibility and click handling
function initializeBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  // Show/hide based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Smooth scroll to top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
}

initializeBackToTop();
