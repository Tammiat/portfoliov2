import type { ReactNode } from 'react';
import { Link, type To } from 'react-router';

import { cx } from '@/lib/cx';

type Variant = 'primary' | 'secondary';

interface ButtonLinkProps {
  to: To;
  variant?: Variant;
  children: ReactNode;
}

const base =
  'inline-flex min-h-touch items-center justify-center gap-2 rounded-button border-2 px-5 font-heading text-base font-bold transition-colors duration-(--duration-fast) ease-standard';

const variants: Record<Variant, string> = {
  primary:
    'border-vermilion bg-vermilion text-white hover:border-ink hover:bg-ink active:bg-ink/90',
  secondary: 'border-ink bg-transparent text-ink hover:bg-white active:bg-paper',
};

/** Lien de navigation présenté comme un bouton (CTA). Pour une action, utiliser un <button>. */
export function ButtonLink({ to, variant = 'primary', children }: ButtonLinkProps) {
  return (
    <Link to={to} className={cx(base, variants[variant])}>
      {children}
    </Link>
  );
}
