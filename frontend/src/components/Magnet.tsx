import React, { useEffect, useRef, useState } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const withinX = Math.abs(e.clientX - centerX) < rect.width / 2 + padding;
      const withinY = Math.abs(e.clientY - centerY) < rect.height / 2 + padding;

      if (withinX && withinY) {
        const dx = (e.clientX - centerX) / strength;
        const dy = (e.clientY - centerY) / strength;
        setTransform(`translate3d(${dx}px, ${dy}px, 0px)`);
        setTransition(activeTransition);
      } else {
        setTransform("translate3d(0px, 0px, 0px)");
        setTransition(inactiveTransition);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={ref} className={className} style={{ transform, transition, willChange: "transform" }}>
      {children}
    </div>
  );
};
