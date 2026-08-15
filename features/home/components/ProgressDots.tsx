import { memo } from "react";
import { motion } from "framer-motion";
import { AUTOPLAY_MS } from "../constants";

type ProgressDotsProps = {
  count: number;
  activeIndex: number;
  activeSlideId: string;
  paused: boolean;
  prefersReducedMotion: boolean;
  onSelect: (index: number) => void;
};

function ProgressDotsBase({
  count,
  activeIndex,
  activeSlideId,
  paused,
  prefersReducedMotion,
  onSelect,
}: ProgressDotsProps) {
  return (
    <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${i + 1} of ${count}`}
            onClick={() => onSelect(i)}
            className="relative h-1.5 w-9 overflow-hidden rounded-full bg-white/15"
          >
            {isActive && !prefersReducedMotion && (
              <motion.span
                key={`${activeSlideId}-fill`}
                className="absolute inset-y-0 left-0 rounded-full bg-[#D8B564]"
                initial={{ width: "0%" }}
                animate={{ width: paused ? undefined : "100%" }}
                transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              />
            )}
            {isActive && prefersReducedMotion && (
              <span className="absolute inset-0 rounded-full bg-[#D8B564]" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export const ProgressDots = memo(ProgressDotsBase);
