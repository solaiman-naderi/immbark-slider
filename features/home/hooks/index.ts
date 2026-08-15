import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Direction } from "../types";

type UseHeroSliderOptions = {
  slideCount: number;
  autoplayMs: number;
};

type UseHeroSliderResult = {
  index: number;
  direction: Direction;
  paused: boolean;
  prefersReducedMotion: boolean;
  goTo: (next: number) => void;
  next: () => void;
  prev: () => void;
  pause: () => void;
  resume: () => void;
};

export function useHeroSlider({
  slideCount,
  autoplayMs,
}: UseHeroSliderOptions): UseHeroSliderResult {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((current) => {
        const wrapsForward =
          current === slideCount - 1 && nextIndex % slideCount === 0;
        setDirection(nextIndex > current || wrapsForward ? 1 : -1);
        return ((nextIndex % slideCount) + slideCount) % slideCount;
      });
    },
    [slideCount],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    timerRef.current = setTimeout(next, autoplayMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused, prefersReducedMotion, autoplayMs]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  return {
    index,
    direction,
    paused,
    prefersReducedMotion,
    goTo,
    next,
    prev,
    pause,
    resume,
  };
}
