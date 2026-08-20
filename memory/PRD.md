# PRD — Omid · 3D Creator Portfolio

## Original problem statement
Dark (#0C0C0C) single-page 3D Creator portfolio landing page (originally specced as "Jack", corrected by owner to "Omid") built with React + TypeScript + Tailwind + Framer Motion + Lucide. Kanit font (300–900). Sections: Hero (masked kinetic heading, magnetic portrait), scroll-driven dual marquee (21 GIFs), About (char-by-char scroll reveal + 4 floating 3D decors), Services (white section, 5 numbered items), Projects (3 sticky-stacking scaling cards), plus Lenis smooth scrolling for an award-level feel.

## Owner / branding
- Name: Omid (apexwebstudio.dev)
- Email: apexwebstudio.dev@gmail.com (Contact Me buttons → mailto)
- Phone / WhatsApp: +974 7244 7536 (wa.me/97472447536)
- Instagram: @apexwebstudio.dev

## Architecture
- Frontend-only (CRA/craco + React 19 + TypeScript). No backend endpoints used.
- src/sections: HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection, ContactSection
- src/components: FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton, CustomCursor
- Lenis momentum scrolling in App.tsx; anchor nav links smoothed via lenis.scrollTo
- Title: "Omid — 3D Creator"

## Implemented (2026-08-19)
- All 5 specced sections + contact footer with email/WhatsApp/Instagram
- Rebrand Jack → Omid (heading, title, copyright, alt text)
- Custom cursor: glowing pale orb + 2 slow trailing wisps (spring physics), hover grow on links, default cursor hidden on pointer-fine devices
- Masked line-reveal hero heading, magnetic portrait, staggered FadeIns
- Verified: all sections screenshot-tested, marquee rows (33/30 tiles) scrolling, heading text "HI, I'M OMID", no blocking console errors
- Testimonials section (2026-08-19): "What Clients Are Saying 🤩" gradient heading (emoji excluded from text-clip), staggered wide/narrow mosaic (user-supplied reference), horizontal cards: avatar+name+title left, quote right, 4 floating animated emojis (😮🌟✨🔥). Testimonial content is SAMPLE DATA (invented quotes/names, randomuser.me avatars)
- Video-reference alignment (2026-08-19, per user Wix Studio reference video): navbar link 2 changed Price → Customers (anchors to #testimonials); new "Trusted by bold brands" auto-scrolling client wordmark strip after hero (CSS marquee, pauses on hover); contact rebuilt as white "LET'S GET IN TOUCH" block (email + gradient SEND mailto button) + dark footer with 3D shapes row, giant gradient "OMID", SOCIAL/CONTACT columns

## Backlog
- P1: Real "Live Project" URLs for the project cards (currently MOCKED, buttons are inert)
- P2: Case-study detail pages per project
- P2: Mobile nav menu refinement
- P3: Replace remaining sample projects (03 Nextlevel, 04 Aura, 05 Solaris) with real work

## Real project assets (2026-08-20)
- 01 The Golden Crumb (Personal) and 02 Tandoor Flame (Client) added from user-uploaded screenshots; cropped with PIL to card ratios (col1-top 1.9:1, col1-bottom 1.28:1, col2 1.12:1) and stored in /app/frontend/public/projects/ (gc-1..3.jpg, tf-1..3.jpg)
