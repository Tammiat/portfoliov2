import { Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router';

import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { mainNavigation } from '@/data/navigation';
import { site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLocale } from '@/i18n/useLocale';
import { cx } from '@/lib/cx';

export function SiteHeader() {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const activeSection = useActiveSection();

  // Escape ferme le menu mobile et rend le focus au bouton déclencheur.
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setIsMenuOpen(false);
      toggleRef.current?.focus();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="relative z-20 bg-paper-warm md:bg-transparent">
      <div className="container-mockup flex min-h-64 flex-wrap items-center gap-x-12 px-20 md:h-94 md:flex-nowrap md:gap-x-0 md:px-64">
        <Link
          to={{ pathname: '/', hash: 'accueil' }}
          className="relative mr-auto flex min-h-touch items-center font-heading text-logo font-extrabold tracking-[-0.025em] text-ink md:mr-0"
        >
          {site.name}
          {/* Trait rouge sous le logo (maquette). */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-0 h-3 w-42 bg-vermilion md:-bottom-2"
          />
        </Link>

        <LanguageSwitcher className="md:order-last md:ml-auto" />

        <nav aria-label={t.nav.label} className="contents md:ml-110 md:block">
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-touch cursor-pointer items-center justify-center rounded-button text-ink hover:bg-ink/5 md:hidden"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
          </button>

          <ul
            id={menuId}
            className={cx(
              'w-full flex-col border-t border-line-soft py-8 md:flex md:w-auto md:flex-row md:gap-41 md:border-0 md:py-0',
              isMenuOpen ? 'flex' : 'max-md:hidden',
            )}
          >
            {mainNavigation.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <Link
                    to={{ pathname: '/', hash: item.sectionId }}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={cx(
                      'group/nav relative flex min-h-touch items-center font-heading text-nav font-medium transition-colors duration-(--duration-fast)',
                      isActive ? 'text-vermilion' : 'text-ink hover:text-vermilion',
                    )}
                  >
                    {t.nav[item.labelKey]}
                    {/* Soulignement : indicateur d'état actif indépendant de la couleur. */}
                    <span
                      aria-hidden="true"
                      className={cx(
                        'absolute bottom-6 left-0 h-3 bg-vermilion transition-[width] duration-(--duration-base) ease-standard md:bottom-2',
                        isActive ? 'w-full' : 'w-0 group-hover/nav:w-full',
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
