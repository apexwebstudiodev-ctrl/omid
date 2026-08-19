import { FadeIn } from "../components/FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "Graphics Designing",
    description:
      "Eye-catching visual designs for your brand — from social media creatives to marketing materials — crafted to communicate clearly and leave a lasting impression.",
  },
  {
    number: "02",
    name: "Rendering",
    description:
      "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    number: "03",
    name: "Branding",
    description:
      "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  {
    number: "04",
    name: "Web Design",
    description:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          data-testid="services-heading"
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto border-b border-[rgba(12,12,12,0.15)]">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              data-testid={`service-item-${service.number}`}
              className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)]"
            >
              <span
                data-testid={`service-number-${service.number}`}
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="pt-2 sm:pt-4 md:pt-6">
                <h3
                  data-testid={`service-name-${service.number}`}
                  className="font-medium uppercase text-[#0C0C0C] leading-tight mb-2 sm:mb-3"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  data-testid={`service-description-${service.number}`}
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
