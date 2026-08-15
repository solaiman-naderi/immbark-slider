export type Stamp = {
  value: string;
  label: string;
};

export type Slide = {
  id: string;
  eyebrow: string;
  headline: string[];
  body: string;
  image: string;
  imageAlt: string;
  stamp: Stamp;
  primaryCta: string;
  secondaryCta: string;
};

export type Direction = 1 | -1;
