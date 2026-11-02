import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link, type To } from 'react-router';

import { cx } from '@/lib/cx';

type Variant = 'primary' | 'secondary';

interface ButtonLinkProps {
  to: To;
  variant?: Variant;
  /** Flèche ↗ de la maquette après le libellé. */
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

const base =
  'group/button inline-flex min-h-touch items-center justify-center gap-10 rounded-button border-[1.5px] font-heading text-button font-medium transition-colors duration-(--duration-base) ease-standard';

const variants: Record<Variant, string> = {
  primary: 'border-vermilion bg-vermilion text-white hover:border-ink hover:bg-ink',
  secondary: 'border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
};

/** Lien de navigation présenté comme un bouton (CTA). Pour une action, utiliser un <button>. */
export function ButtonLink({
  to,
  variant = 'primary',
  withArrow = false,
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={cx(base, variants[variant], className)}>
      {children}
      {withArrow && (
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={2}
          className="size-16 shrink-0 transition-transform duration-(--duration-base) ease-standard group-hover/button:translate-x-2 group-hover/button:-translate-y-2"
        />
      )}
    </Link>
  );
}
