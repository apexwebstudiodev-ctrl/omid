import { motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Omid took our vague idea and turned it into a 3D experience that made our whole team say wow. The attention to detail is unreal — every texture, every light bounce feels intentional.",
    name: "Sarah Mitchell",
    title: "Founder, Nextlevel Studio",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Working with Omid felt like cheating. Our landing page conversions jumped 40% after the redesign.",
    name: "Daniel Kim",
    title: "CEO, Orbit Web3",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The renders he delivered looked straight out of a sci-fi film. Clients keep asking who made our product visuals.",
    name: "Layla Haddad",
    title: "Marketing Director, Vitara",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "Fast, communicative, and insanely talented. He rebuilt our brand identity in 3D and it finally feels like us — bold, modern, unforgettable.",
    name: "Marcus Chen",
    title: "Co-founder, Aura",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote:
      "I've hired a lot of designers. Nobody ships motion design this clean, this fast. The hero animation alone was worth every penny.",
    name: "Amelia Torres",
    title: "Product Lead, Solaris Digital",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    quote:
      "From the first moodboard to the final render, everything was premium. Our investors literally paused the pitch to compliment the visuals.",
    name: "James Okafor",
    title: "Founder, Luminex",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const FLOATERS = [
  { emoji: "😮", className: "left-[3%] top-[12%] text-4xl sm:text-5xl", duration: 5, testId: "floater-surprised" },
  { emoji: "🌟", className: "right-[4%] top-[20%] text-3xl sm:text-4xl", duration: 4, testId: "floater-star" },
  { emoji: "✨", className: "left-[6%] bottom-[18%] text-3xl sm:text-4xl", duration: 6, testId: "floater-sparkles" },
  { emoji: "🔥", className: "right-[7%] bottom-[12%] text-3xl sm:text-5xl", duration: 4.5, testId: "floater-fire" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative bg-black px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {FLOATERS.map((f) => (
        <motion.span
          key={f.testId}
          data-testid={f.testId}
          className={`absolute select-none pointer-events-none ${f.className}`}
          animate={{ y: [0, -14, 0], rotate: [0, 6, -4, 0] }}
          transition={{ duration: f.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          {f.emoji}
        </motion.span>
      ))}

      <FadeIn y={40}>
        <h2
          data-testid="testimonials-heading"
          className="font-black text-center leading-none tracking-tight mb-14 sm:mb-18 md:mb-20"
          style={{ fontSize: "clamp(2.2rem, 7vw, 90px)" }}
        >
          <span className="hero-heading">What Clients Are Saying</span> 🤩
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={(i % 3) * 0.12} y={30} className="break-inside-avoid mb-5">
            <div
              data-testid={`testimonial-card-${i + 1}`}
              className="bg-black border border-white/25 rounded-2xl p-6 sm:p-7 hover:border-white/50 transition-colors duration-300"
            >
              <p
                data-testid={`testimonial-quote-${i + 1}`}
                className="text-[#D7E2EA] font-light leading-relaxed text-sm sm:text-base"
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-6">
                <img
                  data-testid={`testimonial-avatar-${i + 1}`}
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border border-white/30 shrink-0"
                />
                <div>
                  <p data-testid={`testimonial-name-${i + 1}`} className="text-white font-bold text-sm sm:text-base leading-tight">
                    {t.name}
                  </p>
                  <p
                    data-testid={`testimonial-title-${i + 1}`}
                    className="text-[#D7E2EA] opacity-60 text-xs sm:text-sm leading-tight mt-0.5"
                  >
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
