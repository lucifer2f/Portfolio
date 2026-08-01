"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({
  words,
  duration = 2500,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentWord((previous) => {
        const index = words.indexOf(previous);
        return words[(index + 1) % words.length];
      });
    }, duration);

    return () => window.clearInterval(interval);
  }, [duration, words]);

  return (
    <div className={twMerge("z-10 inline-block relative text-left", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
