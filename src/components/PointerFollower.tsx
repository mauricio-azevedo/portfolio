import { frame, useReducedMotionConfig, useSpring } from 'motion/react';
import * as m from 'motion/react-m';
import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Still under the critically damped `spring` in `lib/motion.ts`, so the ball overshoots the
 * cursor, but by one soft swing rather than the long wobble the Motion example uses.
 */
const spring = { damping: 9, stiffness: 50, restDelta: 0.001 };

const ball = {
  width: 72,
  height: 72,
  backgroundColor: 'var(--color-accent-brand)',
  borderRadius: '50%',
};

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    let settling = false;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      const element = ref.current!;

      // The `offset*` properties force the browser to compute layout. `frame.read` keeps the
      // reads in Motion's read phase, where they cannot land between its style writes; that
      // interleaving is what would cost the frame a second layout pass.
      frame.read(() => {
        const nextX = clientX - element.offsetLeft - element.offsetWidth / 2;
        const nextY = clientY - element.offsetTop - element.offsetHeight / 2;

        // Both springs rest at zero, which would park the ball in the top-left corner on
        // every load until the pointer first moved. `jump` places it at the cursor without
        // animating, so the fade-in below starts where the pointer already is.
        if (!settling) {
          settling = true;
          x.jump(nextX);
          y.jump(nextY);
          setAwake(true);
          return;
        }

        x.set(nextX);
        y.set(nextY);
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [ref, x, y]);

  return { x, y, awake };
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
  const { x, y, awake } = useFollowPointer(ref);

  // The ref stays null in this case, so the effect above returns before it binds a listener.
  if (prefersReducedMotion || !finePointer) return null;

  return (
    // The wrapper is the ball's offset parent. Being fixed at the viewport's edges, it makes
    // `offsetLeft` and `offsetTop` zero, which is what lets the example's math treat the
    // pointer's client coordinates as the ball's own.
    //
    // `mix-blend-mode: multiply` is what keeps the disc at full accent strength without
    // making the text under it unreadable. The disc paints above the column, but multiply can
    // only darken, so a glyph crossing it keeps its own darkness and the disc reads as a tint
    // laid over the page rather than a patch covering it. The mode belongs on the wrapper:
    // the wrapper is a stacking context, so a blend set on the ball itself would compose
    // against the wrapper's empty backdrop instead of against the page. This only clears the
    // contrast floor while the accent stays light; a dark accent darkens the glyphs as much
    // as the disc and the difference between them collapses.
    //
    // `z-30` keeps the disc under the sticky header, and `pointer-events: none` is
    // load-bearing here: painting above the column, the disc would otherwise take its clicks.
    <div
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden mix-blend-multiply transition-opacity duration-500 ${awake ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    >
      <m.div ref={ref} style={{ ...ball, x, y }} />
    </div>
  );
}
