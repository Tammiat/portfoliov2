import type { MouseEvent } from 'react';

interface SkipLinkProps {
  targetId: string;
  label?: string;
}

/**
 * Lien d'évitement, premier élément focusable de la page. Visible uniquement au focus.
 * Le focus est déplacé explicitement : comportement fiable sur tous les navigateurs,
 * sans ajouter d'entrée à l'historique.
 */
export function SkipLink({ targetId, label = 'Aller au contenu' }: SkipLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    target.focus();
    target.scrollIntoView({ block: 'start' });
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="sr-only rounded-button bg-ink px-4 py-3 font-heading font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
    >
      {label}
    </a>
  );
}
