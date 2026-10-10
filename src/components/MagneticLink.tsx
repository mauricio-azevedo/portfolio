import { frame, useReducedMotionConfig, useSpring } from 'motion/react';
import * as m from 'motion/react-m';
import { useRef, type PointerEvent, type ReactNode } from 'react';

/** Tighter than the page's shared spring: the link has to keep up with the cursor. */
const spring = { stiffness: 300, damping: 20, mass: 0.5 };

/** The share of the pointer's offset from centre that the link travels. */
const pull = 0.4;

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
};

export function MagneticLink({ href, children, className, isExternal }: MagneticLinkProps) {
  const fieldRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotionConfig();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const handleMove = (event: PointerEvent<HTMLSpanElement>) => {
    const field = fieldRef.current;
    // A touch only produces move events mid-drag, so the pull would read as the link
    // flinching under the finger. `useSpring` is driven by `set` rather than by a prop
    // target, so the reduced-motion preference has to be checked here too.
    if (!field || prefersReducedMotion || event.pointerType !== 'mouse') return;

    const { clientX, clientY } = event;

    // `getBoundingClientRect` forces the browser to compute layout and this runs on every
    // pointer sample. Motion's read phase is where its own measuring happens, so putting the
    // read there keeps it from landing between its style writes.
    frame.read(() => {
      const rect = field.getBoundingClientRect();
      x.set((clientX - (rect.left + rect.width / 2)) * pull);
      y.set((clientY - (rect.top + rect.height / 2)) * pull);
    });
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // The padding is the magnetic field. It widens the area that steers the link beyond the
    // text itself, so the link leans towards the cursor before the cursor arrives, and the
    // matching negative margin keeps that field out of the layout.
    <span
      ref={fieldRef}
      className="-m-2 inline-flex p-2"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <m.a
        className={className}
        style={{ x, y }}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {children}
      </m.a>
    </span>
  );
}
