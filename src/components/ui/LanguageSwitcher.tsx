import { useLocale } from '@/i18n/useLocale';
import { locales } from '@/i18n/translations';
import { cx } from '@/lib/cx';

/**
 * Sélecteur FR / EN de la maquette. Deux boutons à bascule (aria-pressed) :
 * la langue active est en gras et soulignée, pas seulement d'une autre couleur.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={cx(
        'flex h-touch items-center rounded-pill border-2 border-line-soft px-4 font-heading text-[0.8125rem] md:h-30 md:min-h-0 md:text-[max(0.75rem,calc(12.5*var(--spacing)))]',
        className,
      )}
    >
      {locales.map((code, index) => {
        const isActive = code === locale;
        return (
          <span key={code} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className="text-ink">
                /
              </span>
            )}
            <button
              type="button"
              lang={code}
              aria-pressed={isActive}
              aria-label={t.language[code]}
              onClick={() => setLocale(code)}
              className={cx(
                'h-full min-w-touch cursor-pointer px-4 uppercase underline-offset-4 transition-colors md:min-w-0 md:px-5',
                isActive
                  ? 'font-bold text-ink underline'
                  : 'font-medium text-ink-soft hover:text-ink',
              )}
            >
              {code}
            </button>
          </span>
        );
      })}
    </div>
  );
}
