import { createContext } from 'react';

import type { Dictionary, Locale } from './translations';

export interface LocaleContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}

export const LOCALE_STORAGE_KEY = 'tammiat-folio:locale';

export const LocaleContext = createContext<LocaleContextValue | null>(null);
