import { useEffect, useState } from 'react';

/** Ligne de référence (part de la hauteur de la fenêtre) pour déterminer la section courante. */
const ACTIVATION_LINE = 0.4;

function computeActive(ids: readonly string[]): string | null {
  let active: string | null = null;
  const line = window.innerHeight * ACTIVATION_LINE;

  for (const id of ids) {
    const rect = document.getElementById(id)?.getBoundingClientRect();
    // Sans mise en page réelle (rendu serveur, tests), on ne déduit rien.
    if (!rect || rect.height === 0) return null;
    if (rect.top <= line) active = id;
  }

  // En bas de page, la dernière section est courante même si elle est courte.
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  return atBottom ? (ids.at(-1) ?? active) : active;
}

/**
 * Section actuellement lue, d'après la position de défilement.
 * Renvoie null tant qu'aucune mesure fiable n'est disponible.
 */
export function useScrollSpy(ids: readonly string[], enabled = true): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(computeActive(ids)));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids, enabled]);

  return enabled ? active : null;
}
