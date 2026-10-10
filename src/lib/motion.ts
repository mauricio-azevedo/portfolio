import { stagger, type MotionProps, type Transition, type Variants } from 'motion/react';

/** Critically damped: each element settles in about half a second without overshoot. */
export const spring: Transition = { type: 'spring', stiffness: 170, damping: 26 };

/** For the element that orchestrates a group: each child starts `gap` seconds after the previous one. */
export const stage = (gap: number): Variants => ({
  visible: { transition: { delayChildren: stagger(gap) } },
});

/**
 * For each child of a stage: rises 24px into place while it fades in and sharpens. The filter
 * is cleared once it settles, so no stacking context or effect layer outlives the animation.
 */
export const rise: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: spring,
    transitionEnd: { filter: 'none' },
  },
};

/**
 * Props for a section below the hero: it reveals once, when it is 64px inside the viewport,
 * with a quicker stagger than the hero so that long lists keep up with scrolling.
 */
export const reveal: MotionProps = {
  variants: stage(0.05),
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '0px 0px -64px 0px' },
};
