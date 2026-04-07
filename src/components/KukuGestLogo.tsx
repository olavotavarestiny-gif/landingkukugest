import * as React from 'react';

const BLUE = '#1A6FD4';
const ORANGE = '#F06A1A';
const TAGLINE = '#8A8F98';

function KukuGestMark({
  color = BLUE,
  accentColor = ORANGE,
}: {
  color?: string;
  accentColor?: string;
}) {
  return (
    <>
      <rect x="8" y="10" width="18" height="80" rx="4" fill={color} />
      <polygon points="26,50 66,10 83,10 56,42 26,50" fill={color} />
      <polygon points="56,42 83,10 93,10 66,35" fill={accentColor} />
      <polygon points="26,50 56,58 83,90 66,90 26,56" fill={color} />
      <polygon points="56,58 83,90 93,90 66,71" fill={accentColor} />
      <circle cx="38" cy="50" r="5" fill={accentColor} />
    </>
  );
}

export default function KukuGestLogo({
  height = 56,
  showTagline = false,
  className,
  style,
}: {
  height?: number;
  showTagline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const viewBoxHeight = 110;
  const viewBoxWidth = showTagline ? 440 : 360;

  return (
    <svg
      width={(viewBoxWidth / viewBoxHeight) * height}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KukuGest"
      className={className}
      style={style}
    >
      <g transform="translate(0 10)">
        <KukuGestMark />
      </g>

      <text
        x="118"
        y="47"
        fontFamily="'Montserrat', 'Avenir Next', sans-serif"
        fontSize="38"
        fontWeight="800"
        fill={BLUE}
        letterSpacing="-0.5"
      >
        KUKU
      </text>
      <text
        x="118"
        y="87"
        fontFamily="'Montserrat', 'Avenir Next', sans-serif"
        fontSize="38"
        fontWeight="800"
        fill={ORANGE}
        letterSpacing="-0.5"
      >
        GEST
      </text>

      {showTagline ? (
        <text
          x="320"
          y="84"
          fontFamily="'Montserrat', 'Avenir Next', sans-serif"
          fontSize="9"
          fontWeight="600"
          fill={TAGLINE}
          letterSpacing="0.15em"
          textAnchor="middle"
        >
          GESTÃO INTELIGENTE
        </text>
      ) : null}
    </svg>
  );
}
