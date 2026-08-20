import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TRAIL_IMAGES = [
  "/projects/gc-1.jpg",
  "/projects/gc-2.jpg",
  "/projects/gc-3.jpg",
  "/projects/tf-1.jpg",
  "/projects/tf-2.jpg",
  "/projects/tf-3.jpg",
  "/projects/gym-1.jpg",
  "/projects/gym-2.jpg",
  "/projects/gym-3.jpg",
];

interface TrailItem {
  id: number;
  x: number;
  y: number;
  src: string;
  rotate: number;
}

interface MouseTrailProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export const MouseTrail = ({ containerRef }: MouseTrailProps) => {
  const [items, setItems] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: -9999, y: -9999 });
  const counter = useRef(0);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      if (Math.hypot(dx, dy) < 120) return;
      lastPos.current = { x: e.clientX, y: e.clientY };

      const rect = container.getBoundingClientRect();
      const id = ++counter.current;
      const item: TrailItem = {
        id,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        src: TRAIL_IMAGES[Math.floor(Math.random() * TRAIL_IMAGES.length)],
        rotate: Math.random() * 24 - 12,
      };
      setItems((prev) => [...prev.slice(-6), item]);
      window.setTimeout(() => {
        setItems((prev) => prev.filter((p) => p.id !== id));
      }, 1100);
    };

    container.addEventListener("mousemove", onMove);
    return () => container.removeEventListener("mousemove", onMove);
  }, [containerRef]);

  return (
    <div data-testid="mouse-trail" className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {items.map((item) => (
        <motion.img
          key={item.id}
          src={item.src}
          alt=""
          draggable={false}
          className="absolute w-28 h-20 sm:w-36 sm:h-24 object-cover rounded-xl border border-white/25 shadow-2xl"
          style={{ left: item.x, top: item.y, x: "-50%", y: "-50%" }}
          initial={{ opacity: 0, scale: 0.5, rotate: item.rotate }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.92], rotate: [item.rotate, item.rotate, item.rotate - 4, item.rotate - 6], marginTop: [0, -18, -42, -60] }}
          transition={{ duration: 1.05, times: [0, 0.18, 0.65, 1], ease: "easeOut" }}
        />
      ))}
    </div>
  );
};
