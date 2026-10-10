import { stagger, type Transition, type Variants, type ViewportOptions } from 'motion/react';

/** Critically damped: each element settles in about half a second without overshoot. */
export const spring: Transition = { type: 'spring', stiffness: 170, damping: 26 };

/** For the element that orchestrates a group: each child starts 100ms after the previous one. */
export const stage: Variants = {
  visible: { transition: { delayChildren: stagger(0.1) } },
};

/** For each child of a stage: rises 24px into place while it fades in and sharpens. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: spring },
};

/** Sections below the hero reveal once, when they are 64px inside the viewport. */
export const revealViewport: ViewportOptions = { once: true, margin: '0px 0px -64px 0px' };
