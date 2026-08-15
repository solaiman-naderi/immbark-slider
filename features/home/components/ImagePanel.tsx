import { memo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { AUTOPLAY_MS } from "../constants";
import { imageFrameVariants } from "../animations";
import { StampBadge } from "./StampBadge";
import type { Slide } from "../types";

type ImagePanelProps = {
  slide: Slide;
  isFirst: boolean;
  prefersReducedMotion: boolean;
};

function ImagePanelBase({
  slide,
  isFirst,
  prefersReducedMotion,
}: ImagePanelProps) {
  return (
    <div className="relative min-h-[320px] p-3 sm:min-h-[420px] sm:p-4 lg:min-h-[560px] lg:p-5">
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            variants={imageFrameVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ scale: 1 }}
              animate={{ scale: prefersReducedMotion ? 1 : 1.08 }}
              transition={{
                duration: AUTOPLAY_MS / 1000 + 1.5,
                ease: "linear",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={isFirst}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F241C]/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <StampBadge slideId={slide.id} stamp={slide.stamp} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export const ImagePanel = memo(ImagePanelBase);
