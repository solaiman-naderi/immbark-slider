import type { Slide } from "../types";

export const SLIDES: Slide[] = [
  {
    id: "reimagined",
    eyebrow: "Rated 4.9 / 5 by 3,200+ applicants",
    headline: [
      "Immigration, reimagined —",
      "powered by smart tech,",
      "designed by lawyers",
    ],
    body: "Our platform streamlines the application process and connects you with licensed immigration attorneys. Clear pricing, no guesswork, no hidden fees.",
    image: "/images/hero-1.avif",
    imageAlt: "Attorney reviewing a case on a tablet",
    stamp: { value: "4.9/5", label: "Client rating" },
    primaryCta: "Apply Now",
    secondaryCta: "Consult with a Lawyer",
  },
  {
    id: "matched",
    eyebrow: "Human review, not just software",
    headline: [
      "Matched with a licensed",
      "attorney in as little",
      "as 24 hours",
    ],
    body: "Every case is screened by our system, then paired with an immigration attorney licensed in your jurisdiction — no waiting rooms, no cold calls.",
    image: "/images/hero-2.avif",
    imageAlt: "Two people reviewing paperwork together",
    stamp: { value: "24hr", label: "Avg. match time" },
    primaryCta: "Get Matched",
    secondaryCta: "How Matching Works",
  },
  {
    id: "pricing",
    eyebrow: "One quote, before you commit",
    headline: ["Flat-fee pricing —", "you see the total", "before you start"],
    body: "No hourly surprises. Every case gets a fixed quote up front, itemized by filing, review, and representation, so you always know what you owe.",
    image: "/images/hero-3.avif",
    imageAlt: "Calculating fees at a desk",
    stamp: { value: "$0", label: "Hidden fees" },
    primaryCta: "See Pricing",
    secondaryCta: "Compare Plans",
  },
];

export const AUTOPLAY_MS = 6000;

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const EASE_STAMP = [0.34, 1.56, 0.64, 1] as const;
