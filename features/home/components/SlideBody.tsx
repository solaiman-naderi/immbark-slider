import { memo } from "react";
import { motion } from "framer-motion";
import { bodyVariants } from "../animations";

type SlideBodyProps = {
  text: string;
};

function SlideBodyBase({ text }: SlideBodyProps) {
  return (
    <motion.p
      variants={bodyVariants}
      initial="initial"
      animate="animate"
      className="max-w-md font-body text-[15px] leading-relaxed text-[#DCE7DF]/85 sm:text-base"
    >
      {text}
    </motion.p>
  );
}

export const SlideBody = memo(SlideBodyBase);
