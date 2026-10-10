import * as m from 'motion/react-m';
import { rise } from '../lib/motion';

type SectionHeadingProps = {
  id: string;
  title: string;
  meta?: string;
};

export function SectionHeading({ id, title, meta }: SectionHeadingProps) {
  return (
    <m.div className="flex items-center justify-between" variants={rise}>
      <h2 id={id} className="font-mono text-xs font-medium uppercase tracking-wider text-outline">
        {title}
      </h2>
      {meta ? <span className="font-mono text-xs text-outline">{meta}</span> : null}
    </m.div>
  );
}
