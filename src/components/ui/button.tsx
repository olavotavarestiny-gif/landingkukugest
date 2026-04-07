import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'outline' | 'secondary';
type Size = 'default' | 'lg';

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonProps =
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function buttonClasses({
  variant = 'default',
  size = 'default',
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(
    'inline-flex items-center justify-center rounded-[18px] font-semibold tracking-[-0.01em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--workspace-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    size === 'lg' ? 'min-h-[52px] px-7 text-[15px] md:text-base' : 'min-h-[44px] px-5 text-sm',
    variant === 'default' && 'bg-[var(--workspace-primary)] text-[var(--workspace-on-primary)] shadow-[0_18px_40px_-20px_rgba(10,37,64,0.55)] hover:-translate-y-0.5 hover:bg-[var(--workspace-primary-hover)] hover:shadow-[0_24px_50px_-22px_rgba(10,37,64,0.7)]',
    variant === 'outline' && 'border border-current bg-transparent hover:-translate-y-0.5 hover:bg-white hover:text-[#0A2540]',
    variant === 'secondary' && 'border border-[#dde3ec] bg-white text-[#0A2540] shadow-[0_14px_32px_-20px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 hover:bg-[#f3f6fb] hover:shadow-[0_22px_42px_-24px_rgba(15,23,42,0.45)]',
    className
  );
}

export function Button(props: ButtonProps) {
  const { children, className, variant, size, ...rest } = props as ButtonProps & {
    href?: string;
  };
  const classes = buttonClasses({ variant, size, className });

  if ('href' in props && props.href) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes} href={props.href}>
        {children}
      </a>
    );
  }

  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
    </button>
  );
}
