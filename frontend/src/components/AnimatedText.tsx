import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char = ({ char, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText = ({ text, className, style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const total = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const start = charIndex;
        charIndex += word.length + 1;
        return (
          <React.Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, ci) => {
                const i = start + ci;
                const range: [number, number] = [i / total, (i + 1) / total];
                return <Char key={ci} char={char} progress={scrollYProgress} range={range} />;
              })}
            </span>
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </p>
  );
};
