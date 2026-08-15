import { memo } from "react";
import { motion } from "framer-motion";
import { headlineLineVariants } from "../animations";

type SlideHeadlineProps = {
  lines: string[];
};

function SlideHeadlineBase({ lines }: SlideHeadlineProps) {
  return (
    <h1 className="font-display text-[2.6rem] leading-[1.05] text-[#F7F3EA] sm:text-[3.4rem] lg:text-[3.9rem]">
      {lines.map((line, i) => (
        <motion.span
          key={line}
          custom={i}
          variants={headlineLineVariants}
          initial="initial"
          animate="animate"
          className="block"
        >
          {line}
        </motion.span>
      ))}
    </h1>
  );
}

export const SlideHeadline = memo(SlideHeadlineBase);
