# Graphly Design System v4

A scientifically grounded, audience-obsessed color system for Arabic-speaking design learners aged 16–30.

## Project Structure

```
graphly-color-v4/
├── index.html                 # Main entry point
├── css/
│   └── styles.css            # All styles (extracted from original inline CSS)
├── js/
│   └── main.js               # Enhanced interactivity and functionality
├── assets/
│   └── icons/
│       └── icons.js          # SVG icon library (replaces emojis)
└── README.md                 # This file
```

## Features

### Modern Architecture
- **Separated Concerns**: HTML, CSS, and JavaScript are properly separated
- **Scalable Structure**: Easy to add new components and sections
- **Clean HTML**: Semantic HTML structure with proper organization

### Enhanced Design
- **SVG Icons**: All emoji icons replaced with clean, professional SVG icons
- **Improved Interactions**:
  - Click to copy hex color codes
  - Smooth scroll animations
  - Toast notifications
  - Intersection observer for lazy animations
  - Hover effects and smooth transitions

### Accessibility
- WCAG 2.1 AA compliant color contrasts
- Semantic HTML elements
- Proper focus states for keyboard navigation
- Icon descriptions and roles

### Design System Details
- **Core Palette**: 4 primary colors with scientific backing
- **Tonal Scales**: Complete color scales for each primary color
- **Semantic Colors**: Error, caution, and info color states
- **Dark Mode**: Separately calibrated dark mode color system
- **Accessibility**: Full contrast ratio documentation

## Color Palette

### Primary Colors
- **Electric Indigo** (#5C42D9) - Brand anchor & competence signal
- **Coral Punch** (#E84828) - Gamification energy & reward
- **Neon Mint** (#00B887) - Success & completion signal
- **Lemon Zest** (#F0C000) - XP, coins & achievement

### Semantic Colors
- **Hot Rose** (#E83257) - Error state
- **Amber** (#F59E0B) - Caution/warning
- **Cobalt** (#3B7EF6) - Information

### Neutral System
Cool-shifted ink colors with indigo undertone:
- 950, 800, 600, 400, 200, 100, 50 variants

## Getting Started

1. Open `index.html` in a web browser
2. All styles are automatically loaded from `css/styles.css`
3. Icons are injected from `assets/icons/icons.js`
4. Interactive features are powered by `js/main.js`

### Interactive Features
- **Click hex codes** to copy them to clipboard
- **Hover color swatches** for visual feedback
- **Scroll through sections** with smooth animations
- **Toast notifications** confirm clipboard actions

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6 JavaScript support required
- CSS Grid and Flexbox support
- CSS custom properties (variables) support

## Fonts
The project uses Google Fonts:
- **Clash Display**: Headings (wght: 400-700)
- **Bricolage Grotesque**: Body text (wght: 300-800)
- **DM Mono**: Code and labels (wght: 300-500)

## Key Improvements from Original

### Before
- Single monolithic HTML file (73KB)
- Inline CSS (2000+ lines)
- Unicode emojis (less professional)
- No interactivity
- Mixed content organization

### After
- Separated HTML, CSS, JavaScript
- Professional SVG icons
- Enhanced interactivity
- Clear file structure
- Improved maintainability

## Typography System
- **Display Font**: Clash Display (modern headings)
- **Body Font**: Bricolage Grotesque (readable, friendly)
- **Mono Font**: DM Mono (code / technical labels)

## Shadow System
```
--shadow-sm: 0 2px 8px rgba(12,10,24,.06)
--shadow-md: 0 8px 24px rgba(12,10,24,.10)
--shadow-lg: 0 20px 48px rgba(12,10,24,.14)
```

## Border Radius System
```
--r-sm:  10px
--r-md:  16px
--r-lg:  24px
--r-xl:  32px
```

## Scientific Foundation

The color system is built on four research pillars:

1. **Self-Determination Theory** (Deci & Ryan, 2000)
   - Indigo → Competence
   - Coral → Motivation
   - Mint → Relatedness

2. **Activation & Reward Psychology** (Elliott et al., 2007)
   - Coral for peak arousal without aggression
   - Lemon for dopamine anticipation

3. **WCAG 2.1 AA Accessibility** (W3C, 2018)
   - All primary text pairings verified
   - Colorblind-safe combinations

4. **MENA Cultural Studies** (Kaya & Epps, 2004; Aslam, 2006)
   - Violet-indigo preference over cold blue
   - Gold prestige associations in Arab contexts

## Dark Mode

The dark mode is **not** an inverted light mode—it's a separately calibrated color system:
- **Neon Indigo**: #7C66F5 (+20 lightness)
- **Bright Coral**: #FF6E50 (+18 lightness)
- **Hyper Mint**: #00E8A8 (full neon)
- **Pure Gold**: #FFD000 (unmissable)

## Usage Guidelines

Each color has exactly one semantic role:
- **Never use** colors outside their designated purpose
- **Maintain consistency** across light and dark modes
- **Respect tonal scales** for backgrounds and overlays
- **Document deviations** if absolutely necessary

## Customization

To customize the color system:

1. Edit CSS custom properties in `css/styles.css` `:root` section
2. Modify `--indigo-*`, `--coral-*`, `--mint-*`, `--lemon-*` colors
3. Update corresponding dark mode colors (`--dm-*`)
4. Test contrast ratios with WCAG tools

## Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript (no heavy libraries)
- SVG icons are lightweight and scalable
- Smooth animations use GPU acceleration
- Intersection Observer for efficient viewport detection

## License & Attribution

Graphly Design System v4
Target audience: Arabic-speaking learners, 16–30

References:
- Deci & Ryan (2000) - Self-Determination Theory
- Elliott et al. (2007) - Color and Motivation
- Elliot & Maier (2014) - Color Psychology
- Kaya & Epps (2004) - Cross-cultural color preference
- W3C WCAG 2.1 (2018) - Web Content Accessibility Guidelines

---

**Built with modern design principles** • **Accessible by default** • **Scientifically grounded**
