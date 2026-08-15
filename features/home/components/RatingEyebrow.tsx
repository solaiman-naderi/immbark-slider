import { memo } from "react";
import { Star } from "lucide-react";

type RatingEyebrowProps = {
  text: string;
  starCount?: number;
};

function RatingEyebrowBase({ text, starCount = 5 }: RatingEyebrowProps) {
  return (
    <div className="flex items-center gap-2 font-body text-[13px] font-medium tracking-wide text-[#F5F1E8]/80">
      <span className="flex items-center gap-0.5 text-[#D8B564]" aria-hidden>
        {Array.from({ length: starCount }).map((_, i) => (
          <Star key={i} size={14} strokeWidth={0} fill="currentColor" />
        ))}
      </span>
      <span>{text}</span>
    </div>
  );
}

export const RatingEyebrow = memo(RatingEyebrowBase);
