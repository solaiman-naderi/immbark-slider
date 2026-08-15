import { memo } from "react";
import { motion } from "framer-motion";
import { slideContentVariants } from "../animations";
import { RatingEyebrow } from "./RatingEyebrow";
import { SlideHeadline } from "./SlideHeadline";
import { SlideBody } from "./SlideBody";
import { CtaGroup } from "./CtaGroup";
import type { Slide } from "../types";

type SlideContentProps = {
  slide: Slide;
};

function SlideContentBase({ slide }: SlideContentProps) {
  return (
    <motion.div
      key={slide.id}
      variants={slideContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-6"
    >
      <RatingEyebrow text={slide.eyebrow} />
      <SlideHeadline lines={slide.headline} />
      <SlideBody text={slide.body} />
      <CtaGroup
        primaryLabel={slide.primaryCta}
        secondaryLabel={slide.secondaryCta}
      />
    </motion.div>
  );
}

export const SlideContent = memo(SlideContentBase);
