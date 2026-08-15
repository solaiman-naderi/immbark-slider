import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ctaGroupVariants } from "../animations";

type CtaGroupProps = {
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

function CtaGroupBase({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
}: CtaGroupProps) {
  return (
    <motion.div
      variants={ctaGroupVariants}
      initial="initial"
      animate="animate"
      className="mt-2 flex flex-wrap items-center gap-3"
    >
      <button
        onClick={onPrimaryClick}
        className="group flex items-center gap-2 rounded-full bg-[#F5F1E8] px-6 py-3 font-body text-[14px] font-semibold text-[#173328] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(245,241,232,0.5)] active:translate-y-0"
      >
        {primaryLabel}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
      <button
        onClick={onSecondaryClick}
        className="rounded-full border border-[#F5F1E8]/35 px-6 py-3 font-body text-[14px] font-semibold text-[#F5F1E8] transition-colors duration-300 hover:border-[#F5F1E8]/70 hover:bg-white/5"
      >
        {secondaryLabel}
      </button>
    </motion.div>
  );
}

export const CtaGroup = memo(CtaGroupBase);
