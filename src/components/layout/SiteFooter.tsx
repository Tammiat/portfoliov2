import { site } from '@/data/site';
import { useLocale } from '@/i18n/useLocale';

/** Pied de page : sert aussi d'ancre « Contact » en attendant des coordonnées validées. */
export function SiteFooter() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="contact-titre"
      tabIndex={-1}
      className="border-t border-line-soft bg-paper"
    >
      <div className="container-mockup flex flex-wrap items-end justify-between gap-16 px-20 py-32 md:px-52">
        <div>
          <h2 id="contact-titre" className="text-section font-extrabold tracking-[-0.02em]">
            {t.footer.contactTitle}
          </h2>
          <p className="mt-6 text-body text-ink-soft">{t.footer.contactPending}</p>
        </div>
        <p className="font-label text-[0.8125rem] text-muted">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
