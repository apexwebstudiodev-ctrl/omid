const CLIENTS = [
  "Nextlevel",
  "Aura",
  "Solaris",
  "Vitara",
  "Luminex",
  "Orbit",
  "Nexora",
  "Terra",
];

export default function ClientLogosSection() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section
      data-testid="clients-section"
      className="bg-[#0C0C0C] py-12 sm:py-16 overflow-hidden border-y border-[rgba(215,226,234,0.08)]"
    >
      <p
        data-testid="clients-label"
        className="text-center text-[#D7E2EA] opacity-40 uppercase tracking-[0.3em] text-xs sm:text-sm mb-8 sm:mb-10"
      >
        Trusted by bold brands
      </p>
      <div className="animate-marquee flex w-max items-center gap-14 sm:gap-20">
        {row.map((name, i) => (
          <span
            key={i}
            data-testid={`client-logo-${i}`}
            className="text-[#D7E2EA] opacity-40 hover:opacity-90 transition-opacity duration-300 font-black uppercase whitespace-nowrap text-2xl sm:text-3xl md:text-4xl tracking-tight"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
