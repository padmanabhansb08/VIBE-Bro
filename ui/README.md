# UI Component System & References

This folder serves as the reference and repository for UI components and design specifications.

## Structure

ui/
├── README.md                  # UI directory reference and guidelines
├── design-assets-reference.md # Curated developer assets index (Icons, Uiverse, Colors, Animations)
├── tokens.css                 # Core theme variables, color tokens, and motion tokens
└── components/                # Reusable UI components (HTML/CSS/JS or framework-specific)
```

## References & Design Assets
- **Curated Asset Index**: [design-assets-reference.md](design-assets-reference.md) — Extracted from [MohitSutharOfficial/Design-Assets-for-Developers](https://github.com/MohitSutharOfficial/Design-Assets-for-Developers) for quick component lookup (Uiverse, CSSnippets, Lucide, Tabler, Motion.dev, Color systems, and patterns).

## Component Standards

- **Design Integrity**: Follow non-generic, high-craft aesthetics defined in [vibe-design](../vibe-design/SKILL.md) and [references/ANTI_GENERIC.md](../vibe-design/references/ANTI_GENERIC.md).
- **Structure**: Each component should have its markup, styling, and behavior clearly defined and modular.
- **Tokens**: Utilize CSS custom properties for spacing, typography, colors, and elevations defined in [tokens.css](tokens.css).

## Added Components

### 1. Card Resize (`card-resize`)
- **Origin**: [transitions.dev (Free Component)](https://transitions.dev/detail.html?t=card-resize)
- **Files**:
  - HTML & CSS Demo: [ui/components/card-resize.html](components/card-resize.html)
  - React Component: [ui/components/CardResize.jsx](components/CardResize.jsx)
  - Motion & Design Tokens: [ui/tokens.css](tokens.css)
- **Motion Specs**:
  - Duration: `300ms` (`--p4-dur`)
  - Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-smooth-out`)
  - Properties animated: `width` and `height`
  - Dimensions: `220px × 112px` ↔ `154px × 128px` (small state)
- **Accessibility**: Includes `@media (prefers-reduced-motion: reduce)` override to disable transitions for users requesting reduced motion.
