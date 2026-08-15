import { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type NavArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
};

function NavArrowsBase({ onPrev, onNext }: NavArrowsProps) {
  return (
    <div className="ml-auto flex items-center gap-2">
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#F5F1E8] transition-colors hover:bg-white/10"
      >
        <ArrowLeft size={15} />
      </button>
      <button
        onClick={onNext}
        aria-label="Next slide"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#F5F1E8] transition-colors hover:bg-white/10"
      >
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

export const NavArrows = memo(NavArrowsBase);
