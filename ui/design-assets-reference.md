# Developer Design Assets Reference Index

Extracted and curated from [MohitSutharOfficial/Design-Assets-for-Developers](https://github.com/MohitSutharOfficial/Design-Assets-for-Developers).  
Use this index as a fast design-system asset lookup for components, icons, animations, color systems, and UI utilities.

---

## 1. UI Components & Micro-Interactions (Ready for Copy/Paste)

| Resource | Description | Best For |
|---|---|---|
| [CSSnippets](https://cssnippets.shefali.dev) | Vast collection of HTML, CSS, React, and Tailwind snippets | Buttons, checkboxes, dropdowns, shadows |
| [Uiverse.io](https://uiverse.io) | Hundreds of community-crafted HTML & CSS UI elements | Creative buttons, loader cards, inputs, toggle switches |
| [Shadcn UI Blocks](https://www.shadcnui-blocks.com/) | Effortless Shadcn UI component previews & code snippets | Clean modern dashboard layouts, cards, modals |
| [CodyHouse](https://codyhouse.co/) | Accessible HTML/CSS/JS web components | High-craft accessible navigation, forms, filters |
| [HyperUI](https://www.hyperui.dev/) | Free open source Tailwind CSS components | Marketing and eCommerce website sections |
| [CSS Layout](https://csslayout.io/) | Pure CSS patterns and modern layouts | Flexbox/Grid patterns, holy grail, responsive layouts |
| [Sonner](https://sonner.emilkowal.ski/) | Opinionated toast notification component | Clean, micro-animated toast popups |

---

## 2. Micro-Animations & Motion

| Resource | Description | Best For |
|---|---|---|
| [Motion One / Motion.dev](https://motion.dev/) | High-performance animation built on the Web Animations API | Smooth transitions, stagger reveals, zero overhead |
| [Anime.js](https://animejs.com/) | Lightweight JavaScript animation engine | Complex SVG paths, morphing, coordinated timeline sequences |
| [Atropos](https://atroposjs.com/) | Touch-friendly 3D parallax hover effect | 3D interactive tilt cards |
| [Animista](http://animista.net/) | On-demand CSS animation generator | Keyframe animations, entrances, exits, pulses |
| [Animate.css](https://animate.style/) | Cross-browser CSS animation library | Quick element entrance/exit animations |
| [Swiper.js](https://swiperjs.com/) | Modern touch slider & carousel | Product showcases, touch sliders, pagination |

---

## 3. Icons & Vector Assets

| Resource | Description | Formats |
|---|---|---|
| [Lucide Icons](https://lucide.dev/) | Modern, clean community fork of Feather Icons | SVG, React, Vue, Web Components |
| [Tabler Icons](https://tabler-icons.io/) | 3,500+ customizable stroke icons | SVG, React, Vue, Svelte |
| [Iconoir](https://iconoir.com/) | 900+ open-source stroke icons | SVG, React, CSS, Figma |
| [Phosphor Icons](https://phosphoricons.com/) | Flexible family with 6 distinct weight styles | SVG, WebFont, React |
| [Remix Icon](https://remixicon.com/) | Neutral, balanced icon system | SVG, Font, PNG |
| [Heroicons](https://heroicons.com/) | Hand-crafted SVG icons by Tailwind CSS team | SVG, React, Vue |
| [3D Icons](https://3dicons.co/) | 3D rendered open-source icons | PNG, OBJ, FBX, Figma |

---

## 4. Modern Color Systems & Gradients

| Resource | Description | Best For |
|---|---|---|
| [Huetone](https://github.com/ardov/huetone) | Accessible color system generator | APCA/WCAG compliant palette curves |
| [Coolors](https://coolors.co) | Rapid color palette generator | Cohesive color scheme generation |
| [CSS Gradient](https://cssgradient.io/) | Interactive visual CSS gradient generator | Linear & radial gradient CSS generation |
| [MeshGradient.in](https://meshgradient.in/) | Generates and exports beautiful mesh gradients | Ambient hero backdrops |
| [Happy Hues](https://www.happyhues.co/) | Real-world contextual color palettes | Choosing functional color assignments |
| [WhoCanUse](https://whocanuse.com) | Color contrast checker for visual impairments | Accessibility audits |

---

## 5. UI Graphics, Patterns & Generators

| Resource | Description | Best For |
|---|---|---|
| [Hero Patterns](http://www.heropatterns.com/) | Repeatable SVG background patterns | Subtle textured webpage backgrounds |
| [fffuel](https://www.fffuel.co) | Free SVG generators for gradients, textures & noise | Organic SVG shapes, mesh noise, liquid blobs |
| [Boring Avatars](https://boringavatars.com/) | Tiny SVG procedural avatar generator | Fallback user profile avatars |
| [UnDraw](https://undraw.co/) | Open-source customizable SVG illustrations | Empty states, onboarding flows, feature sections |
| [Doodad Pattern Generator](https://doodad.dev/pattern-generator/) | Seamless vector pattern generator | Background textures |

---

## 6. How We Integrate These Into `ui/`

When building new components in `ui/components/`:
1. Check this index for the best design reference or snippet library (e.g. Uiverse, CodyHouse, CSSnippets).
2. Adhere to the design tokens defined in [ui/tokens.css](tokens.css) (or add dedicated variables).
3. Ensure `@media (prefers-reduced-motion: reduce)` is respected for all animations.
4. Keep each component isolated with pure HTML/CSS or React variant.
