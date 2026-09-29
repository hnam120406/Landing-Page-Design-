# CODEX MASTER — DEVICE LANDING PAGE

> **Status:** Alpha foundation
> **Purpose:** Single source of truth for AI/Codex agents working on this repository.
> **Target project root:** `D:\ĐỒ ÁN WEBSITE\landing-page-design`
> **Deployment target:** Vercel
> **Architecture:** One-page responsive product/device landing page
> **Language:** Vietnamese-first UI, code/comments may use English where clearer

---

## 0. NON-NEGOTIABLE ROOT RULE

The ONLY project root is:

```text
D:\ĐỒ ÁN WEBSITE\landing-page-design
```

Codex/AI MUST work directly inside this existing directory.

DO NOT create any nested or wrapper project directory such as:

```text
landing-page-design/landing-page-design
frontend/
client/
website/
project/
src-project/
app-project/
```

DO NOT run `create-next-app` again.

DO NOT initialize another Git repository.

DO NOT delete or recreate `.git`.

DO NOT deploy, commit, or push unless the user explicitly requests it.

Before changing anything, inspect the existing project and preserve the current Next.js-generated configuration unless a change is technically necessary.

---

# 1. PROJECT INTENT

This project is a **single-page landing page for presenting a physical/technical device or product**.

The website must feel:

- modern
- professional
- clean
- premium but not luxurious
- technical but approachable
- fast
- lightweight
- credible
- visually clear on mobile, tablet, laptop, desktop, and wide desktop monitors

This is NOT:

- an e-commerce store
- an admin dashboard
- a marketplace
- a blog
- a CMS
- a multi-page corporate portal
- an authenticated application

The primary goal is to communicate the product quickly and convincingly through strong hierarchy, real product imagery, clear specifications, and concise benefits.

---

# 2. DESIGN DIRECTION

The supplied GenzShop design system is a **reference for spacing discipline, typography, soft surfaces, readable hierarchy, and micro-interactions**.

It MUST NOT be copied literally.

GenzShop uses a tropical / sky-blue marketplace identity. This project instead needs a more restrained **premium technology / product presentation identity**.

Therefore:

- Keep the good typography discipline.
- Keep generous whitespace.
- Keep subtle hover lift and soft shadows.
- Keep rounded cards.
- Keep a max-width content system.
- Keep responsive typography.
- Replace the tropical visual identity with a clean product/technology visual language.
- Do not use floating fruit, tropical scenery, playful decorations, or marketplace patterns.
- Do not overuse gradients.

---

# 3. BRAND / COLOR STRATEGY

## 3.1 Primary visual identity

The project uses a **white + soft neutral + deep navy/black + orange accent** palette.

Orange is the main brand/CTA accent because it gives the landing page energy and creates a strong visual focus without making the interface feel generic.

### Core tokens

```yaml
colors:
  background: "#FFFFFF"
  backgroundSoft: "#F7F8FA"
  backgroundMuted: "#F1F4F8"

  surface: "#FFFFFF"
  surfaceRaised: "#FFFFFF"

  textPrimary: "#0F172A"
  textSecondary: "#334155"
  textMuted: "#64748B"

  border: "#E2E8F0"
  borderStrong: "#CBD5E1"

  brand: "#F97316"
  brandHover: "#EA580C"
  brandSoft: "#FFF7ED"
  brandBorder: "#FED7AA"

  dark: "#111827"
  darkSoft: "#1F2937"

  white: "#FFFFFF"
  black: "#000000"

  instagram: "#E1306C"
  youtube: "#FF0000"
```

## 3.2 Color usage rules

`#F97316` is the primary CTA / brand accent.

Use orange for:

- main CTA
- active navigation indicator
- feature icon accents
- small section labels
- key numbers
- subtle highlight lines
- hover/focus emphasis

Do NOT use orange for large text paragraphs.

Do NOT make entire sections orange unless intentionally creating one isolated CTA band.

Deep navy `#0F172A` is the default main text color.

Avoid pure black for long body copy.

Social buttons keep their actual platform identity colors where appropriate.

Blue is NOT a primary project color. Do not inherit GenzShop's blue-heavy visual identity.

---

# 4. TYPOGRAPHY

Primary font:

```text
Be Vietnam Pro
```

Fallback:

```css
"Be Vietnam Pro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Use `next/font/google` when practical so font loading is optimized by Next.js.

## 4.1 Type scale

```yaml
display:
  mobile: 36px
  tablet: 46px
  desktop: 56px
  wide: 64px
  weight: 700
  lineHeight: 1.08

h1:
  mobile: 36px
  tablet: 46px
  desktop: 56px
  weight: 700
  lineHeight: 1.08

h2:
  mobile: 28px
  tablet: 34px
  desktop: 40px
  weight: 700
  lineHeight: 1.2

h3:
  mobile: 20px
  desktop: 24px
  weight: 700
  lineHeight: 1.3

bodyLarge:
  mobile: 16px
  desktop: 18px
  weight: 400
  lineHeight: 1.7

body:
  size: 16px
  weight: 400
  lineHeight: 1.7

bodySmall:
  size: 14px
  weight: 400
  lineHeight: 1.65

eyebrow:
  size: 12px
  weight: 700
  letterSpacing: 0.08em
  textTransform: uppercase

nav:
  size: 14px
  desktop: 15px
  weight: 500

button:
  size: 15px
  desktop: 16px
  weight: 600
```

## 4.2 Typography principles

Headlines must be strong but compact.

Body text should be easy to read in Vietnamese.

Do not use excessive uppercase.

Do not allow paragraphs to span the entire screen width.

Recommended paragraph measure:

```text
55–72 characters per line
```

---

# 5. SPACING SYSTEM

Use an 8px-based rhythm.

```yaml
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  28: 112px
```

Recommended section vertical spacing:

```text
mobile: 64px
tablet: 80px
desktop: 96px
wide desktop: 112px
```

Do not create arbitrary margins such as 37px, 53px, 71px unless required by an explicit visual reason.

---

# 6. CONTAINER SYSTEM

Use full-width section backgrounds with constrained inner content.

Recommended content container:

```text
max-width: 1280px
margin-inline: auto
```

Horizontal gutters:

```text
<= 479px: 16px
480–767px: 20px
768–1023px: 28px
1024–1279px: 32px
1280px+: 40px
```

For text-heavy areas use a narrower readable width rather than always using all 1280px.

---

# 7. RESPONSIVE STRATEGY

The project is **mobile-first**.

It must remain usable and visually intentional at all common widths.

Reference breakpoints:

```yaml
xs: 360px
sm: 480px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

These are layout decision points, not hard device classifications.

## 7.1 Mobile — 360px to 767px

- Single-column layout by default.
- Hero text comes before product image unless the design specifically benefits from reversing.
- CTA buttons may stack vertically.
- Navigation uses a compact menu/hamburger when links do not fit.
- No horizontal scrolling.
- Cards use 1 column unless a compact 2-column layout remains comfortably readable.
- Technical specifications may switch from table layout to stacked key/value rows.
- Gallery should use 1 large image + smaller responsive items or a horizontal swipe pattern only if implemented accessibly.
- Floating social controls must be smaller and must not block content.
- Minimum interactive touch target: 44x44px.
- Important text must remain at least 14px, preferably 16px.

## 7.2 Tablet — 768px to 1023px

- 2-column layouts become available.
- Feature cards can use 2 columns.
- Gallery can use 2 columns.
- Hero can use a balanced 50/50 or 45/55 split.
- Header can show more navigation links if they fit safely.
- Do not force desktop proportions onto tablet.

## 7.3 Desktop — 1024px to 1279px

- Full navigation may be shown.
- Hero uses a 2-column product-presentation layout.
- Feature sections can use 3 or 4 columns.
- Specifications may use side-by-side data + product diagram.
- Applications can use 3 or 4 cards.

## 7.4 Wide desktop — 1280px+

- Content stays constrained to approximately 1280px.
- Do not stretch text or cards indefinitely.
- Use whitespace around the central container.
- Hero product imagery may scale, but content must remain balanced.

---

# 8. REQUIRED PAGE STRUCTURE

The final one-page structure is:

```text
Header
Hero
Product Overview
Features / Benefits
Technical Specifications
Product Gallery
Applications / Use Cases
Footer
Floating Social Controls
```

Recommended anchor IDs:

```text
#home
#product
#features
#specifications
#gallery
#applications
```

There is NO contact form.

There is NO database.

There is NO authentication.

There is NO API backend required for the current phase.

---

# 9. EXPECTED SOURCE STRUCTURE

The project root remains:

```text
D:\ĐỒ ÁN WEBSITE\landing-page-design
```

Recommended internal structure:

```text
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx

components/
  Header.tsx
  Hero.tsx
  ProductOverview.tsx
  Features.tsx
  Specifications.tsx
  Gallery.tsx
  Applications.tsx
  SocialFloating.tsx
  Footer.tsx

data/
  product.ts

public/
  images/
    hero/
    product/
    features/
    gallery/
    applications/
  icons/

.gitignore
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
package-lock.json
postcss.config.mjs
README.md
tsconfig.json
```

Do not create a second application root.

---

# 10. PAGE COMPOSITION RULE

`app/page.tsx` should remain primarily a composition layer.

Target pattern:

```tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import Gallery from "@/components/Gallery";
import Applications from "@/components/Applications";
import Footer from "@/components/Footer";
import SocialFloating from "@/components/SocialFloating";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProductOverview />
        <Features />
        <Specifications />
        <Gallery />
        <Applications />
      </main>

      <Footer />
      <SocialFloating />
    </>
  );
}
```

Do not place the entire landing page in one massive `page.tsx`.

---

# 11. PRODUCT DATA

Centralize reusable content in:

```text
data/product.ts
```

The file should hold values such as:

```ts
productName
brandName
tagline
shortDescription
longDescription
features
specifications
applications
galleryImages
instagramUrl
youtubeUrl
```

If real product information is unavailable, use clearly marked placeholders.

Do not invent factual technical specifications.

---

# 12. HEADER / NAVIGATION

The header should be clean and compact.

Desktop behavior:

- logo left
- navigation center/right
- optional CTA on the far right
- sticky header is allowed
- sticky header should gain a subtle border/background blur after scrolling if implemented

Mobile behavior:

- logo
- hamburger / compact menu
- menu must be keyboard accessible
- menu must not overflow viewport
- body scrolling should be handled properly when the menu is open

Navigation uses anchor scrolling to sections.

Use smooth scrolling but respect reduced-motion preferences.

---

# 13. HERO

Hero is the highest-priority section.

Structure:

```text
eyebrow
main headline
short product value proposition
primary CTA
secondary CTA (optional)
product image / visual
compact product trust/benefit strip (optional)
```

The hero must explain:

- what the product is
- why it matters
- what action the visitor can take next

Do not use generic filler copy in the final production content.

Use real product imagery when supplied.

Hero image should not be distorted or stretched.

---

# 14. PRODUCT OVERVIEW

Use one strong product image plus concise explanatory copy.

Do not overwhelm the user with paragraphs.

A good pattern:

```text
section label
H2
1–2 short paragraphs
2–3 supporting mini benefits
```

---

# 15. FEATURES

Features should be easy to scan.

Recommended card behavior:

```text
icon
short title
1–2 line explanation
```

Desktop:

```text
3–4 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Avoid feature-card walls with excessive text.

---

# 16. TECHNICAL SPECIFICATIONS

Desktop layout may use:

```text
specification table | product diagram/image
```

On mobile, avoid forcing a wide HTML table.

Prefer:

```text
label
value
separator
```

for each specification row.

If dimensions are visualized, ensure the diagram remains readable and scales correctly.

Never invent dimensions or hardware details.

---

# 17. PRODUCT GALLERY

Use real images from:

```text
/public/images/gallery
```

Preferred formats:

```text
AVIF
WebP
```

JPEG is acceptable for photographic imagery when necessary.

Use `next/image`.

Every image must include:

- width/height or fill strategy with stable container
- descriptive alt text
- appropriate `sizes`
- lazy loading except critical above-the-fold imagery

Avoid layout shift.

---

# 18. APPLICATIONS / USE CASES

Present the product's intended environments or business cases.

Example categories may include:

```text
Cafe
Restaurant
Retail
Office / Enterprise
```

Only use categories actually applicable to the final product.

Each card should contain:

```text
image/icon
title
short description
```

---

# 19. SOCIAL FLOATING CONTROL

No contact form is used.

A persistent vertical social control is placed near the right edge.

Items:

```text
Instagram
YouTube
Back To Top
```

Desktop:

- vertically centered or slightly below center
- fixed to right side
- approximately 48–56px item size
- sufficient gap between items
- no content obstruction

Mobile:

- approximately 44–48px
- may move lower or closer to bottom-right if that prevents content obstruction
- respect safe areas
- must not cover primary CTA buttons

Instagram and YouTube links must open safely:

```text
target="_blank"
rel="noopener noreferrer"
```

Back To Top should use smooth scrolling.

`SocialFloating.tsx` may use `"use client"`.

Do not make unrelated components client components.

---

# 20. FOOTER

The footer is intentionally simple.

Recommended content:

```text
logo / brand
short one-line description
Instagram
YouTube
copyright
optional privacy / terms links
```

No contact form.

No large newsletter block.

No unnecessary multi-column sitemap for a single-page website.

---

# 21. BORDER RADIUS

Recommended tokens:

```yaml
radius:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
```

Use:

```text
buttons: 10–14px
cards: 16–20px
large product media: 20–24px
icon chips: full or 12px
```

Consistency matters more than applying one radius everywhere.

---

# 22. SHADOWS

Static surfaces use subtle shadows.

```yaml
shadowSoft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05)"
shadowCardHover: "0 18px 40px rgba(15, 23, 42, 0.10)"
shadowBrandHover: "0 12px 30px rgba(249, 115, 22, 0.18)"
```

Do not use large dark shadows on every card.

Prefer borders + subtle elevation.

---

# 23. INTERACTION SYSTEM

Recommended transitions:

```text
duration: 180–260ms
easing: ease-out
```

Card hover:

```text
translateY(-3px)
slightly stronger border
soft shadow increase
```

Button hover:

```text
translateY(-1px)
brand color darkens slightly
```

Do not create distracting continuous animation.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 24. ACCESSIBILITY

Target WCAG-conscious implementation.

Required:

- semantic HTML
- meaningful heading hierarchy
- visible keyboard focus
- sufficient color contrast
- descriptive image alt text
- `aria-label` for icon-only controls
- no click target smaller than ~44px on touch devices
- menu keyboard accessibility
- no information communicated only through color
- respect reduced motion
- no auto-playing audio/video

Focus style recommendation:

```css
outline: 2px solid #F97316;
outline-offset: 3px;
```

Do not remove focus outlines without providing an accessible replacement.

---

# 25. IMAGE / MEDIA RULES

All production assets should live under:

```text
public/images/
```

Do not hotlink random remote images.

Do not use remote stock photos as a hidden production dependency.

When no real product image exists yet, use a clearly marked local placeholder strategy rather than misleading imagery.

Never commit massive unoptimized image files if a compressed WebP/AVIF version can be used.

Suggested image organization:

```text
public/images/hero/
public/images/product/
public/images/features/
public/images/gallery/
public/images/applications/
```

---

# 26. PERFORMANCE TARGETS

This landing page should remain lightweight.

Target:

```text
Lighthouse Performance: >= 90
Accessibility: >= 90
Best Practices: >= 90
SEO: >= 90
```

These are goals, not permission to manipulate Lighthouse artificially.

Prefer:

- Server Components by default
- minimal JavaScript
- no large UI framework
- no unnecessary animation library
- optimized images
- font optimization
- static rendering where possible
- lazy load below-the-fold images
- no unused packages

---

# 27. SEO / METADATA

`app/layout.tsx` should define useful metadata.

At minimum:

```text
title
description
metadataBase when domain is known
Open Graph basics when real assets/domain are known
```

Do not invent final brand names, domain names, or product claims.

Use Vietnamese SEO copy when the final product information is supplied.

Only one H1 per page.

Use meaningful section headings.

---

# 28. TECH STACK RULES

The existing repository uses Next.js / React / TypeScript / Tailwind CSS.

Codex MUST inspect `package.json` before assuming exact versions.

Do not downgrade or upgrade framework versions unless explicitly requested or technically necessary.

Preferred technologies:

```text
Next.js App Router
React
TypeScript
Tailwind CSS
next/image
next/font
```

Avoid adding:

```text
Bootstrap
Material UI
Ant Design
Chakra UI
Redux
Zustand
Framer Motion
GSAP
jQuery
large icon bundles
```

unless there is a clear user-approved reason.

If icons are needed, prefer a small compatible icon solution or lightweight inline SVGs.

---

# 29. CLIENT / SERVER COMPONENT POLICY

Server Components are the default.

Only use `"use client"` when browser interactivity requires it.

Likely client components:

```text
SocialFloating.tsx
mobile navigation component if stateful
```

Likely Server Components:

```text
Hero
ProductOverview
Features
Specifications
Gallery
Applications
Footer
```

Avoid hydration mismatches.

---

# 30. CSS STRATEGY

Tailwind is the primary styling system.

Global CSS should contain only:

- CSS variables / design tokens if used
- font/body defaults
- smooth-scroll behavior
- global focus helpers
- reduced-motion handling
- tiny universal resets not already covered

Do not put all section styling into `globals.css`.

Do not create giant unmaintainable utility class strings if a clean component extraction improves readability.

---

# 31. MOBILE SAFETY RULES

At 360px viewport:

- zero horizontal overflow
- no clipped text
- no button extends beyond viewport
- no social control covers hero CTA
- no fixed element hides important content
- no image overflows
- table content remains readable
- nav remains usable
- body copy remains comfortable to read

Use:

```css
overflow-wrap: anywhere;
```

only where long external strings actually require it.

Do not hide essential content simply to make mobile fit.

---

# 32. DESKTOP SAFETY RULES

At 1920px or wider:

- content remains centered
- max-width remains controlled
- line lengths remain readable
- hero does not become visually empty
- cards do not stretch absurdly wide
- images preserve intended proportions

---

# 33. CONTENT RULES

The UI is Vietnamese-first.

Use natural, concise Vietnamese.

Avoid:

- fake testimonials
- invented certifications
- invented customer counts
- invented performance percentages
- invented technical claims
- exaggerated marketing promises
- placeholder Lorem Ipsum in final production

When factual content is missing, mark it clearly as placeholder.

---

# 34. STATE / DATA RULES

This phase is static.

Do not add global state management.

Do not add localStorage unless explicitly required.

Do not add cookies unless explicitly required.

Do not add analytics unless explicitly requested.

Do not add server API routes unless explicitly requested.

---

# 35. VERCEL / DEPLOYMENT

The Git repository is intended for Vercel deployment.

The application should build using the standard project scripts.

Before considering a coding task complete, run:

```bash
npm run build
```

If a lint script exists:

```bash
npm run lint
```

If the current Next.js configuration uses build-integrated linting or no lint script, report that accurately rather than inventing a command.

Do not add a custom `vercel.json` unless it is actually needed.

Do not hardcode localhost URLs into production UI.

---

# 36. GIT SAFETY

Do not:

```text
git init
git reset --hard
git clean -fd
git push --force
```

unless the user explicitly approves the exact action.

Do not commit or push automatically.

AI may inspect:

```text
git status
git diff
git log
```

when helpful.

---

# 37. REQUIRED AI WORKFLOW

Every Codex/AI implementation task should follow this sequence:

```text
1. Inspect
2. Understand existing code
3. Identify minimal changes
4. Implement
5. Validate responsive behavior
6. Run build
7. Run lint when available
8. Review git diff
9. Report exactly what changed
```

Do not rewrite working files unnecessarily.

---

# 38. RESPONSIVE QA MATRIX

Every major UI implementation should be mentally or physically validated at these widths:

```text
360x800
390x844
430x932
768x1024
1024x768
1280x800
1440x900
1920x1080
```

The purpose is not pixel-perfect device emulation.

The purpose is to catch:

- overflow
- awkward wrapping
- bad grid transitions
- fixed-control obstruction
- unreadable text
- excessive whitespace
- stretched images

---

# 39. DEFINITION OF DONE

A UI task is not complete until:

```text
The code is inside the existing project root.
No nested project was created.
TypeScript has no relevant errors.
Production build passes.
Responsive layout behaves correctly.
No obvious horizontal overflow exists.
Mobile controls are touch-friendly.
Images preserve aspect ratios.
Accessibility basics are present.
No fake technical product data was introduced.
No unnecessary package was added.
```

---

# 40. CURRENT PROJECT DECISIONS

These decisions are already made unless the user explicitly changes them:

```yaml
projectType: single-page product landing page

projectRoot: "D:\\ĐỒ ÁN WEBSITE\\landing-page-design"

deployment: Vercel

framework:
  existing: true
  family: Next.js
  router: App Router
  language: TypeScript
  styling: Tailwind CSS

design:
  font: "Be Vietnam Pro"
  primaryAccent: "#F97316"
  primaryAccentName: "Orange"
  background: "#FFFFFF"
  softBackground: "#F7F8FA"
  mainText: "#0F172A"
  maxContentWidth: "1280px"
  visualStyle: "clean premium technology"

responsive:
  mobileFirst: true
  minimumReferenceWidth: "360px"
  maxContentWidth: "1280px"

contact:
  form: false
  floatingSocial:
    instagram: true
    youtube: true
    backToTop: true

backend:
  database: false
  authentication: false
  apiRequired: false

themes:
  darkMode: false
```

---

# 41. SOURCE REFERENCE NOTE

The GenzShop design-system material supplied by the user is a **design reference**, not a dependency and not a template to clone.

Reusable ideas:

```text
Be Vietnam Pro
clear hierarchy
generous whitespace
soft borders
soft shadows
micro hover lift
responsive type
structured tokens
```

Ideas intentionally NOT inherited:

```text
blue-dominant brand identity
tropical visual storytelling
fruit / palm / sky decorative language
marketplace layout
API-service commerce patterns
GenzShop-specific content
```

---

# 42. PLACEHOLDER POLICY

Until real device/product information is supplied, Codex may create placeholder structures but must identify them clearly.

Example:

```ts
// TODO: Replace with verified real product specification.
```

Never make placeholder data look like verified production facts.

---

# 43. FINAL AGENT INSTRUCTION

When working on this repository:

> Prefer simplicity, clarity, responsiveness, performance, and maintainability over visual gimmicks.

> Protect the existing project root and existing Git/Vercel workflow.

> Build the experience mobile-first, then progressively enhance for tablet and desktop.

> Use orange as the primary brand accent, not GenzShop blue.

> Do not add features that were not requested.

> When uncertain about real product data, preserve a placeholder and ask for verified content instead of inventing facts.
