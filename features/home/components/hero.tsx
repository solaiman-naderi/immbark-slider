"use client";

import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useHeroSlider } from "../hooks";
import { AUTOPLAY_MS, SLIDES } from "../constants";
import { heroSliderFontClass } from "@/app/layout";
import { SlideContent } from "./SlideContent";
import { ProgressDots } from "./ProgressDots";
import { ImagePanel } from "./ImagePanel";
import { NavArrows } from "./NavArrows";

export function HeroSlider() {
  const {
    index,
    direction,
    paused,
    prefersReducedMotion,
    goTo,
    next,
    prev,
    pause,
    resume,
  } = useHeroSlider({ slideCount: SLIDES.length, autoplayMs: AUTOPLAY_MS });

  const slide = SLIDES[index];

  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-[1800px] px-4 py-10 sm:px-6 lg:px-8",
        heroSliderFontClass,
      )}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/5 shadow-[0_30px_80px_-30px_rgba(6,20,15,0.6)] sm:rounded-[2.75rem]"
        style={{
          background:
            "radial-gradient(120% 140% at 8% 0%, #24594A 0%, #1D4A3B 42%, #123027 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(245,241,232,0.9) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <AnimatePresence mode="wait" custom={direction}>
              <SlideContent key={slide.id} slide={slide} />
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-5">
              <ProgressDots
                count={SLIDES.length}
                activeIndex={index}
                activeSlideId={slide.id}
                paused={paused}
                prefersReducedMotion={prefersReducedMotion}
                onSelect={goTo}
              />
              <NavArrows onPrev={prev} onNext={next} />
            </div>
          </div>

          <ImagePanel
            slide={slide}
            isFirst={index === 0}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>
      </div>
    </section>
  );
}
