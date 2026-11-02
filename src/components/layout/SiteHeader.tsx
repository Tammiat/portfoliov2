import { Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router';

import { mainNavigation } from '@/data/navigation';
import { site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cx } from '@/lib/cx';

export function SiteHeader() {
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
    <header className="border-b border-ink/15 bg-paper">
      <div className="container-content flex min-h-(--header-height) flex-wrap items-center justify-between gap-x-6">
        <Link
          to={{ pathname: '/', hash: 'accueil' }}
          className="flex min-h-touch items-center font-heading text-lg font-extrabold text-ink"
        >
          {site.name}
        </Link>

        <nav aria-label="Navigation principale" className="contents md:block">
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-touch items-center justify-center rounded-button text-ink hover:bg-white md:hidden"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          </button>

          <ul
            id={menuId}
            className={cx(
              'w-full flex-col pb-4 md:flex md:w-auto md:flex-row md:gap-2 md:pb-0',
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
                      'flex min-h-touch items-center px-3 font-heading font-semibold underline-offset-8 hover:underline focus-visible:underline',
                      isActive ? 'text-vermilion underline decoration-2' : 'text-ink',
                    )}
                  >
                    {item.label}
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
