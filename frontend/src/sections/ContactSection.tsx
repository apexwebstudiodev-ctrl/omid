import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { ContactButton } from "../components/ContactButton";

const LINKS = [
  {
    label: "apexwebstudio.dev@gmail.com",
    href: "mailto:apexwebstudio.dev@gmail.com",
    icon: Mail,
    testId: "contact-email-link",
  },
  {
    label: "+974 7244 7536",
    href: "https://wa.me/97472447536",
    icon: Phone,
    testId: "contact-whatsapp-link",
  },
  {
    label: "@apexwebstudio.dev",
    href: "https://instagram.com/apexwebstudio.dev",
    icon: Instagram,
    testId: "contact-instagram-link",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-10 flex flex-col items-center overflow-hidden"
    >
      <FadeIn y={40}>
        <h2
          data-testid="contact-heading"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Let&rsquo;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20} className="mt-6 sm:mt-8">
        <p
          data-testid="contact-subtext"
          className="text-[#D7E2EA] font-light uppercase tracking-wide text-center opacity-70"
          style={{ fontSize: "clamp(0.8rem, 1.4vw, 1.1rem)" }}
        >
          have an idea? let&rsquo;s turn it into something unforgettable
        </p>
      </FadeIn>

      <FadeIn delay={0.25} y={20} className="mt-10 sm:mt-12">
        <ContactButton testId="footer-contact-button" />
      </FadeIn>

      <div className="mt-16 sm:mt-20 md:mt-24 w-full max-w-3xl flex flex-col">
        {LINKS.map((link, i) => {
          const Icon = link.icon;
          return (
            <FadeIn key={link.testId} delay={0.1 + i * 0.1} y={20}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                data-testid={link.testId}
                className="group flex items-center justify-between gap-4 py-5 sm:py-6 border-t border-[rgba(215,226,234,0.15)] text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
              >
                <span className="flex items-center gap-4 sm:gap-5">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" strokeWidth={1.5} />
                  <span
                    className="font-medium uppercase tracking-wider"
                    style={{ fontSize: "clamp(0.85rem, 2vw, 1.4rem)" }}
                  >
                    {link.label}
                  </span>
                </span>
                <ArrowUpRight
                  className="w-5 h-5 sm:w-6 sm:h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                  strokeWidth={1.5}
                />
              </a>
            </FadeIn>
          );
        })}
      </div>

      <div className="mt-16 sm:mt-20 w-full max-w-3xl flex justify-between items-center border-t border-[rgba(215,226,234,0.15)] pt-6">
        <p data-testid="footer-copyright" className="text-[#D7E2EA] opacity-50 text-xs sm:text-sm uppercase tracking-widest">
          &copy; 2026 omid
        </p>
        <p data-testid="footer-tagline" className="text-[#D7E2EA] opacity-50 text-xs sm:text-sm uppercase tracking-widest">
          3d creator
        </p>
      </div>
    </section>
  );
}
