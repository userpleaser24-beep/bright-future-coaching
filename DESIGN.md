# Design Brief: Bright Future Coaching Centre

**Tagline**: Guide to Fulfillment and Success

## Visual Direction
Premium academic aesthetic. Deep blue conveys institutional authority and trust; gold accents add prestige and warmth. Modern, professional, refined — exceeding reference quality through intentional typography hierarchy and clean card-based composition.

## Tone
Trustworthy, aspirational, academic. Rigorous pedagogy meets modern digital craft.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary (Deep Blue) | `0.32 0.18 248` | Header, navigation, CTAs, primary text |
| Accent (Gold) | `0.72 0.12 80` | Button highlights, borders, hover states |
| Background | `0.98 0.01 0` | Page background, neutral surface |
| Card | `0.99 0 0` | Card/section backgrounds |
| Muted | `0.92 0.01 0` | Subtle dividers, secondary surfaces |
| Foreground | `0.18 0.02 240` | Body text, primary content |
| Border | `0.88 0.01 0` | Subtle section dividers |

Dark mode uses cooler deep blue (`0.12 0.01 240`) with brighter gold (`0.75 0.12 80`).

## Typography
- **Display**: Space Grotesk (geometric, modern, strong headings)
- **Body**: Lora (professional serif, readable at all sizes)
- **Mono**: JetBrains Mono (technical, consistent width)

## Elevation & Depth
- **Subtle**: `0 2px 8px rgba(24,32,64,0.08)` — hover states, minor elevation
- **Card**: `0 4px 16px rgba(24,32,64,0.06)` — card containers
- **Elevated**: `0 8px 24px rgba(24,32,64,0.12)` — modals, popovers
No glow or neon effects.

## Structural Zones

| Zone | Treatment |
|------|-----------|
| Header | Deep blue background, gold accent line beneath |
| Hero | Deep blue gradient baseline with gold CTA |
| Course Cards | White/card bg with subtle shadow, gold left border accent |
| Faculty | Circular avatars on muted background, gold accent on names |
| Features | Alternating card sections with subtle dividers |
| Footer | Deep blue bg with gold accent highlights |

## Spacing & Rhythm
Mobile-first. Base unit = 0.5rem. Generous whitespace between sections (3–4rem on desktop). Card padding: 1.5–2rem.

## Component Patterns
- **Buttons**: Primary (deep blue) + hover opacity, Accent (gold) for secondary actions
- **Links**: Underline-on-hover with gold color transition
- **Cards**: Subtle shadow, white background, no full-width backgrounds
- **Forms**: Gold focus states on inputs, clear validation states

## Motion
- **Entrance**: fade-in (0.4s ease-out), slide-up (0.4s ease-out)
- **Interaction**: All interactive elements use smooth 0.3s transition
- No excessive bounce or delay

## Constraints
- Mobile-responsive (sm/md/lg breakpoints)
- AA+ contrast in both light and dark modes
- No full-page gradients (breaks readability)
- Preserve academic formality — avoid playful animations

## Signature Detail
Gold accent lines and text highlights create a premium, trustworthy academic feel distinct from generic coaching site templates.
