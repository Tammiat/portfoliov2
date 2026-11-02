import type { ReactNode } from 'react';

import { cx } from '@/lib/cx';

interface AccentLabelProps {
  as?: 'p' | 'h2' | 'h3';
  id?: string;
  /** Classes du texte (taille, graisse…). */
  className?: string;
  /** Classes du trait rouge (largeur, écart). */
  barClassName?: string;
  children: ReactNode;
}

/** Libellé précédé du trait vermillon de la maquette (hero, titres de sections). */
export function AccentLabel({
  as: Tag = 'p',
  id,
  className,
  barClassName,
  children,
}: AccentLabelProps) {
  return (
    <Tag id={id} className={cx('flex items-center', className)}>
      <span aria-hidden="true" className={cx('h-3 shrink-0 bg-vermilion', barClassName)} />
      <span>{children}</span>
    </Tag>
  );
}
