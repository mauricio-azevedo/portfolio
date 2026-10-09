import { useEffect, useRef, useState, type ComponentProps, type CSSProperties } from 'react';

type HexagonBackgroundProps = Omit<ComponentProps<'div'>, 'ref'> & {
  /** Hexagon width in CSS pixels. */
  hexagonSize?: number;
  /** Gap between hexagons in CSS pixels; also the width of the ring shown on hover. */
  hexagonMargin?: number;
};

/** Height of a regular pointy-top hexagon relative to its width. */
const HEIGHT_RATIO = 2 / Math.sqrt(3);

/** Rows and columns needed to cover an area, plus one so the last row and column reach past the far edge. */
function measureGrid(width: number, height: number, columnPitch: number, rowPitch: number) {
  return {
    rows: Math.ceil(height / rowPitch) + 1,
    columns: Math.ceil(width / columnPitch) + 1,
  };
}

const hexagonClassName = [
  'relative h-(--hexagon-height) w-(--hexagon-width) shrink-0',
  '[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]',
  'before:absolute before:inset-0 before:bg-background before:transition-colors before:duration-1000',
  'after:absolute after:inset-x-(--hexagon-margin) after:inset-y-(--hexagon-ring-inset-y) after:bg-background after:transition-colors after:duration-1000',
  'after:[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]',
  'hover:before:bg-outline-variant hover:before:duration-0',
  'hover:after:bg-surface-container hover:after:duration-0',
].join(' ');

/**
 * Interactive hexagon grid, adapted from Animate UI's Hexagon Background
 * (https://animate-ui.com/docs/components/backgrounds/hexagon).
 *
 * The grid fills its parent, so the parent sets the size. Hexagons match the
 * page background at rest. Hovering one shows a ring and a tinted fill at once,
 * and both fade back over a second, so a moving cursor leaves a short trail.
 */
export function HexagonBackground({
  className,
  children,
  hexagonSize = 75,
  hexagonMargin = 3,
  style,
  ...props
}: HexagonBackgroundProps) {
  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * HEIGHT_RATIO;
  // Neighbouring centres sit one column pitch apart; rows are that distance at 60 degrees.
  const columnPitch = hexagonWidth + hexagonMargin;
  const rowPitch = (columnPitch * Math.sqrt(3)) / 2;

  const containerRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState(() =>
    measureGrid(window.innerWidth, window.innerHeight, columnPitch, rowPitch),
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const next = measureGrid(width, height, columnPitch, rowPitch);
      setGrid((previous) =>
        previous.rows === next.rows && previous.columns === next.columns ? previous : next,
      );
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [columnPitch, rowPitch]);

  const gridStyle = {
    '--hexagon-width': `${hexagonWidth}px`,
    '--hexagon-height': `${hexagonHeight}px`,
    '--hexagon-margin': `${hexagonMargin}px`,
    // The inner hexagon is regular too, so its vertical inset is the margin scaled by the
    // height ratio; that keeps the ring the same width on the slanted sides.
    '--hexagon-ring-inset-y': `${hexagonMargin * HEIGHT_RATIO}px`,
    ...style,
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      data-slot="hexagon-background"
      className={['relative size-full overflow-hidden bg-surface-container', className]
        .filter(Boolean)
        .join(' ')}
      style={gridStyle}
      {...props}
    >
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        {Array.from({ length: grid.rows }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex shrink-0 gap-x-(--hexagon-margin)"
            style={{
              // Consecutive rows overlap by the difference between a hexagon's height and the row pitch.
              // The first row starts half a hexagon up and every other row shifts by half a column,
              // so the container edges cut through hexagon bodies rather than running along their
              // vertices or sides.
              marginTop: rowIndex === 0 ? -hexagonHeight / 2 : rowPitch - hexagonHeight,
              marginLeft: rowIndex % 2 === 0 ? -columnPitch / 4 : (-columnPitch * 3) / 4,
            }}
          >
            {Array.from({ length: grid.columns }, (_, columnIndex) => (
              <div key={columnIndex} className={hexagonClassName} />
            ))}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
