import { frame, useReducedMotionConfig, useSpring } from 'motion/react';
import * as m from 'motion/react-m';
import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Far below the critically damped `spring` in `lib/motion.ts`, so the ball overshoots the
 * cursor and swings back instead of arriving and stopping.
 */
const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

const ball = {
  width: 100,
  height: 100,
  backgroundColor: 'var(--color-accent-brand)',
  borderRadius: '50%',
};

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      const element = ref.current!;

      // The `offset*` properties force the browser to compute layout. `frame.read` keeps the
      // reads in Motion's read phase, where they cannot land between its style writes; that
      // interleaving is what would cost the frame a second layout pass.
      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
}

const hasFinePointer = () => window.matchMedia('(pointer: fine)').matches;

export function PointerFollower() {
  // `useSpring` has no reduced-motion branch: the value is driven by `set`, not by a prop
  // target, so `MotionConfig`'s setting never reaches it. `useReducedMotionConfig` is the hook
  // that reads that setting; plain `useReducedMotion` ignores it.
  const prefersReducedMotion = useReducedMotionConfig();
  // On a touch screen `pointermove` fires only during a drag, so the ball would follow one
  // swipe and then sit where the finger lifted. Settled on mount, like the preference above.
  const [finePointer] = useState(hasFinePointer);

  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  // The ref stays null in this case, so the effect above returns before it binds a listener.
  if (prefersReducedMotion || !finePointer) return null;

  return (
    // The wrapper is the ball's offset parent. Being fixed at the viewport's edges, it makes
    // `offsetLeft` and `offsetTop` zero, which is what lets the example's math treat the
    // pointer's client coordinates as the ball's own. The negative z-index puts the ball
    // under the text: `html` carries no background, so `body`'s is promoted to the canvas and
    // `body` paints none in its own box, leaving the canvas below the negative layer. Giving
    // `html` or `#root` a background of its own would hide the ball completely.
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <m.div ref={ref} style={{ ...ball, x, y }} />
    </div>
  );
}
