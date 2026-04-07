import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-xl border border-[#dde3ec] bg-white text-[#0A2540]', className)}
      {...props}
    />
  );
}
