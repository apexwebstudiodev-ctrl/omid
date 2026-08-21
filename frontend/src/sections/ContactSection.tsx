import { Instagram, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";

const SHAPES = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "Moon 3D shape",
    testId: "footer-shape-moon",
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "Abstract 3D shape",
    testId: "footer-shape-object",
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "Lego 3D shape",
    testId: "footer-shape-lego",
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "3D shapes group",
    testId: "footer-shape-group",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" data-testid="contact-section" className="relative">
      <div className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center text-center">
        <FadeIn y={40}>
          <h2
            data-testid="contact-heading"
            className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 10vw, 130px)" }}
          >
            Let&rsquo;s get in touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20} className="mt-8 sm:mt-10">
          <a
            data-testid="contact-email-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=apexwebstudio.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0C0C0C] font-medium tracking-wide hover:opacity-60 transition-opacity duration-200"
            style={{ fontSize: "clamp(1rem, 2.4vw, 1.8rem)" }}
          >
            apexwebstudio.dev@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={0.25} y={20} className="mt-10 sm:mt-12">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=apexwebstudio.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-send-button"
            className="inline-block rounded-full px-12 py-4 sm:px-16 sm:py-5 text-sm sm:text-base text-white font-medium uppercase tracking-widest"
            style={{
              background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid #0C0C0C",
              outlineOffset: "-3px",
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            Send
          </motion.a>
        </FadeIn>
      </div>

      <footer data-testid="site-footer" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 pb-8 flex flex-col items-center overflow-hidden">
        <FadeIn y={30} className="w-full">
          <div className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16 flex-wrap">
            {SHAPES.map((shape) => (
              <img
                key={shape.testId}
                data-testid={shape.testId}
                src={shape.src}
                alt={shape.alt}
                loading="lazy"
                draggable={false}
                className="w-14 sm:w-20 md:w-24 h-auto"
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={40} className="w-full mt-10 sm:mt-14">
          <p
            data-testid="footer-name"
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: "clamp(4rem, 20vw, 280px)" }}
          >
            Omid
          </p>
        </FadeIn>

        <div className="w-full max-w-5xl mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-[rgba(215,226,234,0.15)] pt-10">
          <div>
            <p data-testid="footer-social-heading" className="text-[#D7E2EA] font-bold uppercase tracking-widest text-sm mb-4">
              Social
            </p>
            <a
              data-testid="contact-instagram-link"
              href="https://instagram.com/apexwebstudio.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200 text-sm sm:text-base"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              @apexwebstudio.dev
            </a>
          </div>
          <div>
            <p data-testid="footer-contact-heading" className="text-[#D7E2EA] font-bold uppercase tracking-widest text-sm mb-4">
              Contact
            </p>
            <a
              data-testid="footer-email-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=apexwebstudio.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200 text-sm sm:text-base mb-3"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              apexwebstudio.dev@gmail.com
            </a>
            <a
              data-testid="contact-whatsapp-link"
              href="https://wa.me/97472447536"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              +974 7244 7536
            </a>
          </div>
        </div>

        <div className="w-full max-w-5xl mt-10 flex justify-between items-center border-t border-[rgba(215,226,234,0.15)] pt-6">
          <p data-testid="footer-copyright" className="text-[#D7E2EA] opacity-50 text-xs sm:text-sm uppercase tracking-widest">
            &copy; 2026 omid
          </p>
          <p data-testid="footer-tagline" className="text-[#D7E2EA] opacity-50 text-xs sm:text-sm uppercase tracking-widest">
            3d creator
          </p>
        </div>
      </footer>
    </section>
  );
}
