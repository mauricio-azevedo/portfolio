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
  // A tint rather than the brand colour itself. The disc passes behind running text, so it
  // has to stay light enough that the muted body colour still clears 4.5:1 against it. At
  // this mix that holds for an accent at or lighter than #82a8e6; a darker accent needs a
  // smaller share of it here.
  backgroundColor: 'color-mix(in srgb, var(--color-accent-brand) 45%, white)',
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
    // The negative z-index puts the ball under the text: `html` carries no background, so
    // `body`'s is promoted to the canvas and `body` paints none in its own box, leaving the
    // canvas below the negative layer. Giving `html` or `#root` a background of its own would
    // hide the ball completely. Anything opaque in the column covers the ball as it passes,
    // which is why the disc has to be light enough to read as a tint on its own rather than
    // relying on a blend with the text above it.
    //
    // `pointer-events: none` changes nothing while the z-index stays negative, since hit
    // testing follows paint order and the ball is already behind `#root`. It is here for the
    // day someone raises that z-index.
    <div
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-opacity duration-500 ${awake ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    >
      <m.div ref={ref} style={{ ...ball, x, y }} />
    </div>
  );
}
