import * as React from 'react';

export default function KukuGestLogo({
  height = 56,
  className,
  style,
  showTagline: _showTagline,
}: {
  height?: number;
  showTagline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="KukuGest"
      height={height}
      style={{ height, width: 'auto', display: 'inline-block', ...style }}
      className={className}
    />
  );
}
