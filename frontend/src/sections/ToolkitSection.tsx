import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "../components/FadeIn";

const Pedestal = () => (
  <>
    <div
      className="absolute left-1/2 -translate-x-1/2 -bottom-9 w-[80%] h-[30px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, rgba(182,0,168,0.38) 0%, rgba(118,33,176,0.16) 45%, transparent 70%)",
        filter: "blur(7px)",
      }}
    />
    <div
      className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[62%] h-[20px] rounded-[50%] border border-[rgba(182,0,168,0.45)] pointer-events-none"
      style={{ boxShadow: "0 0 20px rgba(182,0,168,0.35), inset 0 0 14px rgba(182,0,168,0.22)" }}
    />
  </>
);

const Laptop3D = () => (
  <div className="relative">
    <img
      data-testid="toolkit-laptop"
      src="./projects/toolkit-laptop.png"
      alt="Laptop 3D render"
      draggable={false}
      loading="lazy"
      className="w-[150px] sm:w-[210px] md:w-[260px] h-auto"
    />
    <Pedestal />
  </div>
);

const Keyboard3D = () => (
  <div className="relative">
    <img
      data-testid="toolkit-keyboard"
      src="./projects/toolkit-keyboard.png"
      alt="Mechanical keyboard 3D render"
      draggable={false}
      loading="lazy"
      className="w-[240px] sm:w-[340px] md:w-[420px] h-auto"
    />
    <Pedestal />
  </div>
);

const Mouse3D = () => (
  <div className="relative">
    <img
      data-testid="toolkit-mouse"
      src="./projects/toolkit-mouse.png"
      alt="Premium mouse 3D render"
      draggable={false}
      loading="lazy"
      className="w-[100px] sm:w-[130px] md:w-[160px] h-auto"
    />
    <Pedestal />
  </div>
);

const Headphones3D = () => (
  <div className="relative">
    <img
      data-testid="toolkit-headphones"
      src="./projects/toolkit-headphones.png"
      alt="Studio headphones 3D render"
      draggable={false}
      loading="lazy"
      className="w-[130px] sm:w-[170px] md:w-[210px] h-auto"
    />
    <Pedestal />
  </div>
);

interface LayerProps {
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  depth: number;
  className?: string;
  floatDelay?: number;
  floatDuration?: number;
  children: React.ReactNode;
}

const ParallaxLayer = ({ sx, sy, depth, className, floatDelay = 0, floatDuration = 6, children }: LayerProps) => {
  const x = useTransform(sx, (v) => v * depth * 70);
  const y = useTransform(sy, (v) => v * depth * 50);
  return (
    <motion.div className={className} style={{ x, y, willChange: "transform" }}>
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
        transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function ToolkitSection() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.8 });
  const rotateX = useTransform(sy, (v) => v * -7);
  const rotateY = useTransform(sx, (v) => v * 9);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-testid="toolkit-section"
      className="relative bg-[#0C0C0C] min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      <div
        className="absolute left-[5%] top-[15%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(118,33,176,0.16) 0%, transparent 65%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute right-[24%] top-[28%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(190,76,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
      />

      <div className="relative z-20 text-center px-5 pointer-events-none">
        <FadeIn y={40}>
          <h2
            data-testid="toolkit-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 9vw, 120px)" }}
          >
            Creator&rsquo;s Toolkit
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <p
            data-testid="toolkit-subtext"
            className="text-[#D7E2EA] opacity-60 uppercase tracking-[0.3em] text-xs sm:text-sm mt-4 sm:mt-6"
          >
            the instruments behind the craft
          </p>
        </FadeIn>
      </div>

      <motion.div
        className="absolute inset-0 z-10"
        style={{ rotateX, rotateY, transformPerspective: 1200, willChange: "transform" }}
      >
        <ParallaxLayer sx={sx} sy={sy} depth={0.9} floatDuration={7} className="absolute left-[3%] sm:left-[6%] bottom-[6%] sm:bottom-[10%]">
          <Keyboard3D />
        </ParallaxLayer>
        <ParallaxLayer sx={sx} sy={sy} depth={1.2} floatDuration={6} className="absolute right-[4%] sm:right-[9%] top-[9%] sm:top-[14%]">
          <Laptop3D />
        </ParallaxLayer>
        <ParallaxLayer sx={sx} sy={sy} depth={0.6} floatDuration={8} floatDelay={0.6} className="absolute left-[4%] sm:left-[9%] top-[8%] sm:top-[12%]">
          <Headphones3D />
        </ParallaxLayer>
        <ParallaxLayer sx={sx} sy={sy} depth={1.0} floatDuration={6.5} floatDelay={0.3} className="absolute right-[4%] sm:right-[10%] bottom-[11%] sm:bottom-[16%]">
          <Mouse3D />
        </ParallaxLayer>
      </motion.div>
    </section>
  );
}
