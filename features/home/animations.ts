import type { Variants } from "framer-motion";
import { EASE_OUT, EASE_STAMP } from "./constants";

export const slideContentVariants: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: EASE_OUT } },
};

export const headlineLineVariants: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: (lineIndex: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * lineIndex, ease: EASE_OUT },
  }),
};

export const bodyVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.28, ease: EASE_OUT },
  },
};

export const ctaGroupVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.36, ease: EASE_OUT },
  },
};

export const imageFrameVariants: Variants = {
  initial: { opacity: 0, scale: 1.06 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

export const stampVariants: Variants = {
  initial: { opacity: 0, scale: 1.4, rotate: -8 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: -6,
    transition: { duration: 0.5, delay: 0.25, ease: EASE_STAMP },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.25 } },
};
