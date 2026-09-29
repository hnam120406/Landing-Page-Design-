---
version: alpha
name: Landing Page Device Design System
description: |
  Design system for a one-page Vietnamese device/product landing page deployed
  on Vercel. The visual language is clean, premium, technical, trustworthy and
  lightweight. It adapts the useful structural ideas from the supplied
  ShopTaiKhoan design reference—clear hierarchy, strong spacing discipline,
  rounded surfaces and restrained micro-elevation—while removing marketplace,
  stock, account, checkout and teal/blue commerce patterns.

  The site uses a white and soft-neutral foundation, deep navy typography and a
  focused orange brand accent. It is mobile-first and must remain intentional on
  phones, tablets, laptops, desktop monitors and wide screens.
project:
  root: "D:\\ĐỒ ÁN WEBSITE\\landing-page-design"
  framework: "Next.js App Router"
  language: "TypeScript"
  styling: "Tailwind CSS"
  deployment: "Vercel"
  pageType: "single-page device/product landing page"
  uiLanguage: "Vietnamese-first"
  backendRequired: false
  databaseRequired: false
  authenticationRequired: false
  contactForm: false
sourceAdaptation:
  inspiredBy: "shoptaikhoan.store-DESIGN.md"
  mode: "adapted-not-cloned"
  principlesRetained:
    - strong typography hierarchy
    - geometric spacing discipline
    - subtle layered elevation
    - rounded cards and buttons
    - clear responsive breakpoints
    - focus and interaction states
    - strong visual separation between sections
  principlesRejected:
    - e-commerce storefront structure
    - product stock/status badges
    - account/login-oriented UI
    - marketplace grids
    - checkout patterns
    - blue/teal primary brand identity
    - fixed five-column grid across all breakpoints
    - form-centric interaction patterns
colors:
  background: "#FFFFFF"
  background-soft: "#F7F8FA"
  background-muted: "#F1F4F8"
  surface: "#FFFFFF"
  surface-alt: "#111827"
  on-brand: "#FFFFFF"
  ink: "#0F172A"
  body: "#334155"
  muted: "#64748B"
  faint: "#94A3B8"
  hairline: "#E2E8F0"
  hairline-strong: "#CBD5E1"
  brand: "#F97316"
  brand-hover: "#EA580C"
  brand-active: "#C2410C"
  brand-soft: "#FFF7ED"
  brand-soft-2: "#FFEDD5"
  brand-border: "#FED7AA"
  dark: "#111827"
  dark-soft: "#1F2937"
  instagram: "#E1306C"
  youtube: "#FF0000"
typography:
  family:
    primary: "Be Vietnam Pro"
    fallback: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  display-xl:
    fontSizeMobile: 36px
    fontSizeTablet: 46px
    fontSizeDesktop: 56px
    fontSizeWide: 64px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.8px
  heading-xl:
    fontSizeMobile: 30px
    fontSizeTablet: 34px
    fontSizeDesktop: 40px
    fontWeight: 700
    lineHeight: 1.2
  heading-lg:
    fontSizeMobile: 24px
    fontSizeDesktop: 30px
    fontWeight: 700
    lineHeight: 1.25
  heading-md:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.35
  heading-sm:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.45
  body-lg:
    fontSizeMobile: 16px
    fontSizeDesktop: 18px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.65
  nav:
    fontSizeMobile: 14px
    fontSizeDesktop: 15px
    fontWeight: 500
    lineHeight: 1.5
  button:
    fontSizeMobile: 15px
    fontSizeDesktop: 16px
    fontWeight: 600
    lineHeight: 1.5
  eyebrow:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.96px
    textTransform: uppercase
rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
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
shadows:
  soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05)"
  card: "0 10px 30px rgba(15, 23, 42, 0.06)"
  card-hover: "0 18px 40px rgba(15, 23, 42, 0.10)"
  brand-hover: "0 12px 30px rgba(249, 115, 22, 0.18)"
  floating: "0 10px 30px rgba(15, 23, 42, 0.14)"
elevationStrategy: "border-first-soft-shadow"
themes:
  light:
    bg: "#FFFFFF"
    surface: "#FFFFFF"
    surfaceRaised: "#F7F8FA"
    text: "#0F172A"
    textMuted: "#64748B"
    border: "#E2E8F0"
    accent: "#F97316"
    accentFg: "#FFFFFF"
    focusRing: "#F97316"
  dark:
    supported: false
    note: "Dark mode is not part of the current project scope."
breakpoints:
  - width: 360
    layout: mobile
    contentColumns: 1
    featureColumns: 1
    applicationColumns: 1
    navMode: compact
    menuToggleVisible: true
    headingPx: 36
    bodyPx: 16
    sectionPaddingX: 16
  - width: 480
    layout: mobile-wide
    contentColumns: 1
    featureColumns: 1
    applicationColumns: 1
    navMode: compact
    menuToggleVisible: true
    headingPx: 38
    bodyPx: 16
    sectionPaddingX: 20
  - width: 768
    layout: tablet
    contentColumns: 2
    featureColumns: 2
    applicationColumns: 2
    navMode: compact-or-partial
    menuToggleVisible: true
    headingPx: 46
    bodyPx: 16
    sectionPaddingX: 28
  - width: 1024
    layout: desktop
    contentColumns: 2
    featureColumns: 3
    applicationColumns: 3
    navMode: desktop
    menuToggleVisible: false
    headingPx: 56
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1280
    layout: desktop-wide
    maxContainerWidth: 1280
    contentColumns: 2
    featureColumns: 4
    applicationColumns: 4
    navMode: desktop
    menuToggleVisible: false
    headingPx: 56
    bodyPx: 16
    sectionPaddingX: 40
  - width: 1536
    layout: wide
    maxContainerWidth: 1280
    contentColumns: 2
    featureColumns: 4
    applicationColumns: 4
    navMode: desktop
    menuToggleVisible: false
    headingPx: 64
    bodyPx: 16
    sectionPaddingX: 40
---

# Design System — Landing Page Thiết Bị

## 1. Mục tiêu hệ thống

Hệ thống giao diện này dành cho một **landing page một trang** để giới thiệu một thiết bị hoặc sản phẩm kỹ thuật. Website phải cho cảm giác hiện đại, chuyên nghiệp, sạch, đáng tin, có chất công nghệ nhưng không lạnh lẽo.

File tham khảo ShopTaiKhoan có nhiều điểm đáng giữ như typography rõ, border mềm, card có radius và micro-elevation. Tuy nhiên toàn bộ logic e-commerce, stock badge, product listing dày đặc, checkout, account và hệ màu xanh/teal phải được loại bỏ.

### Tính cách thị giác

- Clean premium technology
- White + soft neutral foundation
- Deep navy typography
- Orange brand accent
- Strong product imagery
- Generous whitespace
- Restrained motion
- Mobile-first
- Fast and lightweight

## 2. Hệ màu

### Brand Orange

Primary:

```text
#F97316
```

Hover:

```text
#EA580C
```

Active:

```text
#C2410C
```

Soft background:

```text
#FFF7ED
```

Orange chỉ dùng tại nơi cần thu hút chú ý: CTA, active nav, eyebrow, icon emphasis, focus ring, số liệu hoặc highlight nhỏ. Không dùng cam cho đoạn văn dài và không phủ toàn bộ nhiều section.

### Neutral

```text
Background       #FFFFFF
Soft background  #F7F8FA
Muted background #F1F4F8
Heading           #0F172A
Body              #334155
Muted text        #64748B
Faint text        #94A3B8
Border            #E2E8F0
Strong border     #CBD5E1
```

### Social

```text
Instagram #E1306C
YouTube   #FF0000
```

Hai màu này chỉ dùng cho social controls.

## 3. Typography

Font duy nhất cho UI:

```text
Be Vietnam Pro
```

Ưu tiên load bằng `next/font/google`.

### Hero heading

```text
Mobile       36px / 700
Tablet       46px / 700
Desktop      56px / 700
Wide desktop 64px / 700
line-height  1.08
```

### H2

```text
Mobile  28–30px
Tablet  34px
Desktop 40px
Weight  700
```

### H3

```text
18–24px
700
```

### Body

```text
Default: 16px / 400 / 1.7
Lead:    18px / 400 / 1.7
Small:   14px / 400 / 1.65
```

### Eyebrow

```text
12px / 700 / uppercase / letter-spacing 0.08em
```

Ví dụ:

```text
TÍNH NĂNG NỔI BẬT
THÔNG SỐ KỸ THUẬT
HÌNH ẢNH SẢN PHẨM
ỨNG DỤNG
```

### Quy tắc

- Không dùng weight 900 cho mọi heading.
- Không nén body xuống line-height 1.
- Không dùng chữ nhỏ 9–11px cho nội dung chính.
- Không trộn nhiều font.
- Paragraph nên giới hạn chiều rộng để dễ đọc.

## 4. Spacing

Dùng nhịp 8px:

```text
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112
```

Section spacing:

```text
Mobile       64px
Tablet       80px
Desktop      96px
Wide desktop 112px
```

Không tạo khoảng cách ngẫu nhiên nếu không có lý do thiết kế rõ ràng.

## 5. Container

```css
max-width: 1280px;
margin-inline: auto;
```

Horizontal gutter:

```text
<= 479px     16px
480–767px    20px
768–1023px   28px
1024–1279px  32px
1280px+      40px
```

Full-width section background có thể kéo toàn màn hình nhưng nội dung bên trong vẫn phải vào container.

## 6. Responsive strategy

### Mobile 360–767

- 1 column mặc định.
- Hero text trước product image.
- CTA có thể stack.
- Hamburger menu khi không đủ chỗ.
- Feature cards 1 cột.
- Application cards 1 cột.
- Specification chuyển sang stacked key/value.
- Social Floating nhỏ hơn desktop.
- Touch target tối thiểu khoảng 44x44px.
- Không horizontal overflow.

### Tablet 768–1023

- 2-column layout trở nên khả dụng.
- Hero có thể 45/55 hoặc 50/50.
- Features 2 cột.
- Applications 2 cột.
- Gallery 2 cột.
- Navigation vẫn có thể compact.

### Desktop 1024–1279

- Full navigation.
- Hero 2 cột.
- Features 3–4 cột.
- Specifications data + media side by side.
- Applications 3–4 cột.

### Wide desktop 1280+

- Container giữ tối đa khoảng 1280px.
- Không stretch card và paragraph vô hạn.
- Dùng whitespace thay vì phóng to toàn bộ UI.

## 7. Required Page Structure

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

Không có:

```text
contact form
newsletter form
login
register
cart
checkout
stock status
product filters
marketplace search
account dashboard
```

## 8. Header

Desktop:

```text
Logo | Navigation | Optional CTA
```

Mobile:

```text
Logo | Menu button
```

Anchor IDs:

```text
#home
#product
#features
#specifications
#gallery
#applications
```

Header phải keyboard accessible, không overflow và respect reduced motion.

## 9. Hero

Hero phải trả lời nhanh:

```text
Thiết bị này là gì?
Giải quyết vấn đề gì?
Người dùng nên làm gì tiếp theo?
```

Cấu trúc:

```text
eyebrow
H1
short value proposition
primary CTA
secondary CTA
product image
optional benefit strip
```

Không dùng fake performance, fake certification, fake testimonial hoặc fake customer count.

## 10. Product Overview

Cấu trúc:

```text
Product image
Section label
H2
1–2 short paragraphs
2–3 supporting benefits
```

Mục tiêu là giải thích sản phẩm và dẫn tự nhiên sang Features / Specifications.

## 11. Features

Card:

```text
icon
title
1–2 line description
```

Responsive:

```text
Mobile  1 column
Tablet  2 columns
Desktop 3–4 columns
```

Icon container có thể dùng `#FFF7ED`, icon dùng `#F97316`.

Feature card:

```text
background #FFFFFF
border     #E2E8F0
radius     16px
padding    24px
shadow     soft
```

Hover chỉ nên mạnh khi card có tính tương tác thực.

## 12. Technical Specifications

Desktop:

```text
Specification data | Product diagram/media
```

Mobile:

```text
Label
Value
Divider
```

Không ép table rộng trên mobile.

Không tự tạo dimensions, voltage, weight, power, OS, warranty hoặc compatibility.

Nếu chưa có dữ liệu thật:

```ts
// TODO: Replace with verified product specification.
```

## 13. Gallery

Assets:

```text
public/images/gallery/
```

Ưu tiên WebP / AVIF và `next/image`.

Mỗi image phải có stable dimensions, alt text, `sizes`, object-fit strategy và responsive sizing.

Không hotlink ảnh ngẫu nhiên. Không dùng stock photo để giả làm thiết bị thật.

## 14. Applications / Use Cases

Card:

```text
image/icon
use-case title
short description
```

Chỉ dùng use case đã xác minh. Không tự khẳng định Cafe, Restaurant, Retail hoặc Enterprise nếu chưa có dữ liệu thật.

## 15. Buttons

### Primary

```text
Background #F97316
Text       #FFFFFF
Border     #F97316
Radius     12px
Height     ~50px desktop
Min touch  44px mobile
Padding    12px 20px
Weight     600
```

Hover:

```text
#EA580C
translateY(-1px)
soft orange shadow
```

### Secondary

```text
Background #FFFFFF
Text       #0F172A
Border     #CBD5E1
Radius     12px
```

Hover:

```text
Background #FFF7ED
Border     #FED7AA
```

## 16. Border radius

```text
Small       8px
Button      12px
Card        16px
Large media 24px
Pill        9999px
```

Không dùng radius khác nhau vô tổ chức.

## 17. Depth & Elevation

Soft:

```text
0 1px 2px rgba(15,23,42,0.04),
0 8px 24px rgba(15,23,42,0.05)
```

Card hover:

```text
0 18px 40px rgba(15,23,42,0.10)
```

Brand hover:

```text
0 12px 30px rgba(249,115,22,0.18)
```

Không dùng shadow đen dày trên mọi card.

## 18. Interaction

Default transition:

```text
180–260ms ease-out
```

Button:

```text
hover translateY(-1px)
active translateY(0)
```

Card:

```text
hover translateY(-3px)
```

Không dùng continuous bouncing, aggressive parallax hoặc animation loop không cần thiết.

## 19. Social Floating

Items:

```text
Instagram
YouTube
Back To Top
```

Desktop:

```text
48–56px
fixed right
vertical stack
```

Mobile:

```text
44–48px
safe-area aware
must not cover CTA
```

External social links:

```html
target="_blank"
rel="noopener noreferrer"
```

`SocialFloating.tsx` có thể là Client Component.

## 20. Footer

Nội dung:

```text
Brand/logo
Short description
Instagram
YouTube
Copyright
Optional legal links
```

Không contact form, newsletter hoặc sitemap lớn.

## 21. Accessibility

Bắt buộc:

- Semantic HTML.
- Một H1.
- H2/H3 hierarchy hợp lý.
- Focus visible.
- Contrast đủ mạnh.
- Alt text đúng nghĩa.
- aria-label cho icon-only controls.
- Touch target khoảng 44px trở lên.
- Keyboard-accessible navigation.
- Reduced-motion support.
- Không truyền tải thông tin chỉ bằng màu.

Focus style:

```css
outline: 2px solid #F97316;
outline-offset: 3px;
```

## 22. Performance

Target:

```text
Lighthouse Performance >= 90
Accessibility >= 90
Best Practices >= 90
SEO >= 90
```

Ưu tiên:

- Server Components.
- Static rendering.
- Minimal JavaScript.
- Optimized images.
- `next/font`.
- Không large UI framework.
- Không animation library nếu chưa thật sự cần.
- Không global state library.
- Không dependency thừa.

## 23. Server / Client Components

Server Component mặc định:

```text
Hero
ProductOverview
Features
Specifications
Gallery
Applications
Footer
```

Client Component chỉ khi cần browser state/API:

```text
SocialFloating
MobileNavigation
```

Không đặt `"use client"` ở toàn bộ page.

## 24. CSS Strategy

Tailwind là styling chính.

`globals.css` chỉ nên chứa:

- design tokens
- body baseline
- font/background defaults
- smooth scroll
- focus helpers
- reduced-motion
- minimal resets/helpers

Không đưa toàn bộ styling section vào `globals.css`.

## 25. Content Integrity

Không tự tạo:

- chứng nhận
- số khách hàng
- thông số kỹ thuật
- wattage
- dimensions
- warranty
- OS
- compatibility claims
- conversion rate
- performance percentages
- testimonials

Nếu thiếu dữ liệu thì giữ TODO / placeholder rõ ràng.

## 26. Do's

- Dùng orange làm brand accent.
- Dùng deep navy cho typography.
- Dùng Be Vietnam Pro.
- Dùng whitespace rộng.
- Dùng responsive grid thật sự.
- Dùng card radius 16px.
- Dùng media radius 20–24px.
- Giữ shadow nhẹ.
- Tối ưu mobile từ đầu.
- Giữ container <= 1280px.
- Dùng semantic HTML.
- Giữ JavaScript tối thiểu.
- Dùng local product assets.

## 27. Don'ts

- Không clone ShopTaiKhoan.
- Không dùng blue/teal làm primary brand.
- Không giữ 5-column grid trên mobile.
- Không marketplace product cards.
- Không stock badges.
- Không auth/account UI.
- Không cart/checkout.
- Không contact form.
- Không heavy shadow.
- Không lạm dụng gradient.
- Không font 900 ở mọi nơi.
- Không text 9–11px cho nội dung chính.
- Không desktop-first rồi vá mobile sau.
- Không hardcode width 1440px.
- Không fake technical information.

## 28. Responsive QA Matrix

Kiểm tra tối thiểu:

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

Check:

- horizontal overflow
- hero wrapping
- CTA overflow
- navigation
- card reflow
- specification readability
- image aspect ratio
- social floating obstruction
- footer wrapping
- line length
- excess whitespace

## 29. Project Architecture

Project root duy nhất:

```text
D:\ĐỒ ÁN WEBSITE\landing-page-design
```

Expected:

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

MASTER_DESIGN.md
```

Không tạo wrapper:

```text
landing-page-design/landing-page-design
frontend/
client/
website/
project/
```

## 30. Product Data System

Centralize:

```text
data/product.ts
```

Suggested TypeScript model:

```ts
export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
  verified: boolean;
}

export interface ProductApplication {
  title: string;
  description: string;
  image?: string;
}

export interface ProductData {
  brandName: string;
  productName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  features: ProductFeature[];
  specifications: ProductSpecification[];
  applications: ProductApplication[];
  galleryImages: string[];
  instagramUrl: string;
  youtubeUrl: string;
}
```

Placeholder data phải được đánh dấu rõ.

## 31. Metadata / SEO

`app/layout.tsx` cần tối thiểu:

```text
title
description
metadataBase khi domain thật đã biết
Open Graph khi có asset thật
```

Không hardcode localhost làm production domain.

Không fake final brand/domain.

Chỉ một H1 trên page.

## 32. Agent Implementation Rules

AI/Codex phải:

1. Đọc file này hoàn chỉnh.
2. Đọc `MASTER_DESIGN.md` nếu tồn tại.
3. Audit project trước khi sửa.
4. Chỉ code trong project root hiện tại.
5. Không chạy create-next-app lại.
6. Không git init.
7. Không tự commit.
8. Không tự push.
9. Không deploy nếu chưa được yêu cầu.
10. Không thêm backend/database/auth.
11. Không thêm contact form.
12. Không fake product data.
13. Chạy production build trước khi kết thúc task.

## 33. Definition of Done

```text
No nested project directory exists.
Production build passes.
Responsive layout works from 360px upward.
No obvious horizontal overflow exists.
Orange is the primary brand accent.
Be Vietnam Pro is used consistently.
Container remains controlled on wide screens.
Page remains single-page.
No contact form exists.
Social floating exists where required.
No marketplace patterns were introduced.
No fake product specifications were introduced.
Accessibility basics are present.
Images maintain aspect ratio.
No unnecessary dependency was added.
```

## 34. Agent Quick Reference

```yaml
PROJECT:
  root: "D:\\ĐỒ ÁN WEBSITE\\landing-page-design"
  type: "single-page device landing page"
  framework: "Next.js App Router"
  deployment: "Vercel"

BRAND:
  accent: "#F97316"
  accentHover: "#EA580C"
  accentSoft: "#FFF7ED"
  text: "#0F172A"
  body: "#334155"
  muted: "#64748B"
  border: "#E2E8F0"
  background: "#FFFFFF"
  backgroundSoft: "#F7F8FA"

TYPE:
  family: "Be Vietnam Pro"

CONTAINER:
  maxWidth: "1280px"

RESPONSIVE:
  mobileFirst: true
  minReference: "360px"
  breakpoints: [480, 768, 1024, 1280, 1536]

PAGE:
  sections:
    - Header
    - Hero
    - ProductOverview
    - Features
    - Specifications
    - Gallery
    - Applications
    - Footer
    - SocialFloating

CONTACT:
  form: false
  instagram: true
  youtube: true
  backToTop: true

BACKEND:
  api: false
  database: false
  auth: false

DESIGN:
  style: "clean premium technology"
  darkMode: false
  ecommercePatterns: false
  marketplaceGrid: false
```

## 35. Final Design Principle

> Trang phải mang cảm giác giới thiệu một sản phẩm tập trung, không phải một marketplace.

> Dùng visual hierarchy để giải thích thiết bị rõ ràng.

> Dùng màu cam ở những nơi sự chú ý có giá trị.

> Ưu tiên typography và whitespace trước decoration.

> Mobile là layout chính thức, không phải desktop thu nhỏ.

> Khi dữ liệu sản phẩm chưa được xác minh, giữ placeholder rõ ràng thay vì tự tạo sự thật.
