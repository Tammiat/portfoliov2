/** Supprime les espaces et les slashs finaux ; renvoie undefined si la valeur est vide. */
export function normalizeUrl(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed.replace(/\/+$/, '') : undefined;
}

/** Accès typé et centralisé aux variables d'environnement (voir .env.example). */
export const env = {
  siteUrl: normalizeUrl(import.meta.env.VITE_SITE_URL),
} as const;
