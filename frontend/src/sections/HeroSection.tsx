import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { ContactButton } from "../components/ContactButton";
import { MouseTrail } from "../components/MouseTrail";

const MOBILE_DECK = [
  "./projects/gc-3.jpg",
  "./projects/tf-3.jpg",
  "./projects/gym-3.jpg",
  "./projects/tf-1.jpg",
  "./projects/gc-2.jpg",
  "./projects/gym-1.jpg",
];

const MobileShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % MOBILE_DECK.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  const prev = MOBILE_DECK[(index - 1 + MOBILE_DECK.length) % MOBILE_DECK.length];
  const next = MOBILE_DECK[(index + 1) % MOBILE_DECK.length];

  return (
    <div data-testid="mobile-showcase" className="relative w-[240px] h-[170px]">
      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(118,33,176,0.35) 0%, transparent 70%)", filter: "blur(20px)" }}
      />
      <img
        src={prev}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-white/15 opacity-40"
        style={{ transform: "rotate(-9deg) translateX(-14px) scale(0.92)" }}
      />
      <img
        src={next}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-white/15 opacity-40"
        style={{ transform: "rotate(9deg) translateX(14px) scale(0.92)" }}
      />
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={MOBILE_DECK[index]}
          alt="Project preview"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-white/25 shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.85, rotate: 7 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: -40, scale: 0.9, rotate: -7 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>
    </div>
  );
};

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Customers", href: "#testimonials" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} data-testid="hero-section" className="relative h-screen flex flex-col" style={{ overflowX: "clip" }}>
      <FadeIn delay={0} y={-20} as="nav" className="relative z-30">
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="relative z-20 w-full overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <motion.h1
          data-testid="hero-heading"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&rsquo;m omid
        </motion.h1>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center sm:hidden">
        <FadeIn delay={0.6} y={30}>
          <MobileShowcase />
        </FadeIn>
      </div>

      <MouseTrail containerRef={sectionRef} />

      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            data-testid="hero-tagline"
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton testId="hero-contact-button" />
        </FadeIn>
      </div>
    </section>
  );
}
