import { memo } from "react";
import { motion } from "framer-motion";
import { stampVariants } from "../animations";
import type { Stamp } from "../types";

type StampBadgeProps = {
  slideId: string;
  stamp: Stamp;
};

function StampBadgeBase({ slideId, stamp }: StampBadgeProps) {
  return (
    <motion.div
      key={`${slideId}-stamp`}
      variants={stampVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute bottom-5 left-5 flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full border-2 border-dashed border-[#F5F1E8]/70 bg-[#173328]/70 text-center backdrop-blur-sm sm:h-[104px] sm:w-[104px]"
    >
      <span className="font-mono text-[15px] font-medium leading-none text-[#F5F1E8] sm:text-[17px]">
        {stamp.value}
      </span>
      <span className="font-mono mt-1 text-[8px] uppercase tracking-[0.12em] text-[#D8B564] sm:text-[9px]">
        {stamp.label}
      </span>
    </motion.div>
  );
}

export const StampBadge = memo(StampBadgeBase);
