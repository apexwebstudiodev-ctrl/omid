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
- 01 The Golden Crumb (Client, corrected 2026-08-21) and 02 Tandoor Flame (Personal) from user screenshots; 03 Eagle Fitness Centre (Client, gym) added 2026-08-21. Sample projects (Nextlevel/Aura/Solaris) removed. Crops in /app/frontend/public/projects/ (gc-1..3, tf-1..3, gym-1..3 .jpg), PIL-cropped to tile ratios with brightness/contrast tweaks
- Hero portrait (figma 3D character) REMOVED per user request (2026-08-21)
- Contact buttons (2026-08-21): mailto: replaced with Gmail compose URL (mail.google.com/mail/?view=cm&fs=1&to=...) target _blank on ContactButton, SEND button, and both footer email links — verified by click test (popup opens Gmail). Production build rebuilt including public/_redirects (SPA fallback) for Cloudflare Pages: build cmd `yarn build`, output `build`, root `frontend`
- ToolkitSection (2026-08-21): replaced "Trusted by bold brands" strip. 4 AI-generated photorealistic 3D renders (gpt-image-1, quality high, via EMERGENT_LLM_KEY): keyboard, mouse, headphones, laptop (sphere & torus removed per user) — dark metallic + purple/magenta rim light, flood-fill alpha cutouts. Cursor parallax (spring depth layers) + container rotateX/rotateY tilt + idle float loops. GlowPedestal holo-rings brighten/scale on cursor proximity (340px falloff, spring). Laptop brightened via PIL (key budget exhausted — user must top up Universal Key for new renders). Generator script: /app/backend/gen_toolkit.py
- Mobile hero (2026-08-21): MobileShowcase — swipeable fanned project-card deck (drag="x", ±70px threshold, direction-aware slide transitions), SWIPE hint, sm:hidden; desktop untouched
- MouseTrail (2026-08-21): hero-section-only cursor trail — spawns random project crops behind cursor with random ±12° rotation, floats up, fades after ~1s, pointer-events-none, desktop-only (pointer:fine), throttled by 120px cursor travel; enlarged to w-40/52 and pool extended with trail-1..4.jpg extra crops
- Testimonials now REAL reviews (2026-08-21, user-provided, typos fixed, repeated x2): Eagle Fitness Centre, The Golden Crumb, Tandoor Flame; pfps are generated icon PNGs (dumbbell/flame/wheat lucide icons on white) at /projects/pfp-*.png
## Deployment config (2026-08-21)
- package.json "homepage": "." → build emits relative ./static/... paths; all /projects/ image refs changed to ./projects/ (ProjectsSection, MouseTrail, TestimonialsSection, ToolkitSection). Zero broken images verified
- .github/workflows/deploy.yml: GitHub Actions → build frontend (yarn install + yarn build in /frontend), deploy frontend/build via actions/deploy-pages. Requires repo Settings → Pages → Source: GitHub Actions
- Cloudflare Pages: root directory `frontend`, build command `yarn build`, output `build` (no env vars needed; public/_redirects included)
- Verified: production build OK, build/index.html uses ./static paths
