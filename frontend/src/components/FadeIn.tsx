import React, { useMemo } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className,
  style,
}: FadeInProps) => {
  const MotionTag = useMemo(() => motion.create(as as any), [as]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};
