import type { Transition, Variants } from 'framer-motion';

/**
 * Animations partagées : courtes, à base d'opacity/transform uniquement.
 * MotionConfig reducedMotion="user" (App.tsx) neutralise les déplacements
 * quand prefers-reduced-motion est activé.
 */
const ease: Transition['ease'] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const settle: Variants = {
  hidden: { scale: 1.03 },
  visible: { scale: 1, transition: { duration: 1.2, ease } },
};

export function stagger(children = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: children, delayChildren: delay } },
  };
}

/** Révélation unique à l'entrée dans l'écran. */
export const revealOnScroll = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
} as const;
