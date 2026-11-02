import { type ReactNode, useEffect, useMemo, useState } from 'react';

import { LOCALE_STORAGE_KEY, LocaleContext } from './context';
import { defaultLocale, isLocale, type Locale, translations } from './translations';

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : defaultLocale;
  } catch {
    return defaultLocale; // stockage indisponible (navigation privée, cookies bloqués…)
  }
}

/** Fournit la langue courante et synchronise l'attribut lang du document. */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readStoredLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // préférence non mémorisée : sans conséquence
    }
  }, [locale]);

  const value = useMemo(() => ({ locale, t: translations[locale], setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
