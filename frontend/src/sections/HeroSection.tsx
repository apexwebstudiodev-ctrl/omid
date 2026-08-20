import { useRef } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { ContactButton } from "../components/ContactButton";
import { MouseTrail } from "../components/MouseTrail";

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
