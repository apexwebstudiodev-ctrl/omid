import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const orbX = useSpring(x, { stiffness: 160, damping: 22, mass: 0.7 });
  const orbY = useSpring(y, { stiffness: 160, damping: 22, mass: 0.7 });
  const trail1X = useSpring(x, { stiffness: 60, damping: 16, mass: 0.9 });
  const trail1Y = useSpring(y, { stiffness: 60, damping: 16, mass: 0.9 });
  const trail2X = useSpring(x, { stiffness: 25, damping: 12, mass: 1.2 });
  const trail2Y = useSpring(y, { stiffness: 25, damping: 12, mass: 1.2 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button"));
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div data-testid="custom-cursor" className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      <motion.div style={{ x: trail2X, y: trail2Y, opacity: visible ? 0.5 : 0 }} className="absolute top-0 left-0">
        <div
          className="-translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(215,226,234,0.28) 0%, rgba(215,226,234,0.08) 45%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      <motion.div style={{ x: trail1X, y: trail1Y, opacity: visible ? 0.7 : 0 }} className="absolute top-0 left-0">
        <div
          className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(230,238,245,0.4) 0%, rgba(215,226,234,0.12) 50%, transparent 75%)",
            filter: "blur(4px)",
          }}
        />
      </motion.div>

      <motion.div style={{ x: orbX, y: orbY, opacity: visible ? 1 : 0 }} className="absolute top-0 left-0">
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            data-testid="cursor-orb"
            animate={{ scale: hovering ? 2.4 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-4 h-4 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(222,232,240,0.55) 40%, rgba(215,226,234,0.15) 65%, transparent 80%)",
              boxShadow: "0 0 18px 5px rgba(232,240,248,0.35), 0 0 42px 12px rgba(215,226,234,0.12)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};
