import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const Row = ({ images, translate, rowId }: { images: string[]; translate: number; rowId: string }) => (
  <div
    data-testid={`marquee-row-${rowId}`}
    className="flex gap-3 w-max"
    style={{ transform: `translateX(${translate}px)`, willChange: "transform" }}
  >
    {[...images, ...images, ...images].map((src, i) => (
      <img
        key={i}
        data-testid={`marquee-tile-${rowId}-${i}`}
        src={src}
        alt="3D project preview"
        loading="lazy"
        draggable={false}
        className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
      />
    ))}
  </div>
);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (el) {
          const sectionTop = el.getBoundingClientRect().top + window.scrollY;
          setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row1 = IMAGES.slice(0, 11);
  const row2 = IMAGES.slice(11);

  return (
    <section
      ref={sectionRef}
      data-testid="marquee-section"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <Row images={row1} translate={offset - 200} rowId="1" />
        <Row images={row2} translate={-(offset - 200)} rowId="2" />
      </div>
    </section>
  );
}
