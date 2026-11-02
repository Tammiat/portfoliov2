import { useContext } from 'react';

import { LocaleContext, type LocaleContextValue } from './context';

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error('useLocale doit être utilisé dans <LocaleProvider>.');
  return value;
}
