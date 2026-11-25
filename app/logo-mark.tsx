const SIZE = 320;
const CENTER = SIZE / 2;
const RINGS = 6;

function point(radius: number, degrees: number) {
  const radians = (degrees * Math.PI) / 180;
  return {
    x: +(CENTER + radius * Math.cos(radians)).toFixed(2),
    y: +(CENTER + radius * Math.sin(radians)).toFixed(2),
  };
}

const rings = Array.from({ length: RINGS }, (_, i) => {
  const t = i / (RINGS - 1);
  const radius = 52 + t * 96;
  const startAngle = -128 + t * 92;
  const start = point(radius, startAngle);
  const end = point(radius, startAngle + 205);
  const width = 2 + t * 5;
  return {
    radius,
    width,
    dot: start,
    arc: `M ${start.x} ${start.y} A ${radius} ${radius} 0 1 1 ${end.x} ${end.y}`,
  };
});

/** Marca de espiral: anillos concéntricos que arrancan en un punto. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className={className}
    >
      {rings.map((ring) => (
        <g key={ring.radius}>
          <circle
            cx={CENTER}
            cy={CENTER}
            r={ring.radius}
            strokeWidth={1}
            opacity={0.35}
          />
          <path d={ring.arc} strokeWidth={ring.width} strokeLinecap="round" />
          <circle
            cx={ring.dot.x}
            cy={ring.dot.y}
            r={ring.width * 0.85}
            fill="currentColor"
            stroke="none"
          />
        </g>
      ))}
    </svg>
  );
}
