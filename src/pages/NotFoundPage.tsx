import { ButtonLink } from '@/components/ui/ButtonLink';
import { site } from '@/data/site';
import { useLocale } from '@/i18n/useLocale';

export function NotFoundPage() {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="introuvable-titre"
      className="container-mockup px-20 py-80 md:px-64 md:py-120"
    >
      <title>{`${t.notFound.documentTitle} — ${site.name}`}</title>
      <p className="font-label text-eyebrow font-semibold tracking-[0.2em] text-ink-soft uppercase">
        {t.notFound.code}
      </p>
      <h1
        id="introuvable-titre"
        className="mt-12 text-about-title font-extrabold tracking-[-0.03em]"
      >
        {t.notFound.title}
      </h1>
      <p className="mt-16 max-w-480 text-body text-ink-soft">{t.notFound.description}</p>
      <div className="mt-32">
        <ButtonLink to="/" className="h-48 px-30">
          {t.notFound.back}
        </ButtonLink>
      </div>
    </section>
  );
}

// Permet le chargement différé via la propriété `lazy` du routeur.
export { NotFoundPage as Component };
