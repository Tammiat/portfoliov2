import { m } from 'framer-motion';

import aboutImage from '@/assets/images/about-architecture.webp';
import { AccentLabel } from '@/components/ui/AccentLabel';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SeigaihaPattern } from '@/components/ui/SeigaihaPattern';
import { site } from '@/data/site';
import { useLocale } from '@/i18n/useLocale';
import { fadeIn, fadeUp, revealOnScroll, stagger } from '@/lib/motion';

export function AboutSection() {
  const { t } = useLocale();
  const { about } = t;

  return (
    <section id="apropos" aria-labelledby="apropos-titre" tabIndex={-1} className="overflow-x-clip">
      <div className="relative container-mockup px-20 pt-64 md:px-52 md:pt-87">
        <SeigaihaPattern className="pointer-events-none absolute top-240 right-0 hidden w-254 md:block" />

        <m.div
          className="relative grid gap-32 md:grid-cols-[calc(351*var(--spacing))_1fr] md:gap-64"
          variants={stagger(0.12)}
          {...revealOnScroll}
        >
          <m.img
            variants={fadeIn}
            src={aboutImage}
            alt={about.imageAlt}
            width={349}
            height={275}
            loading="lazy"
            decoding="async"
            className="aspect-351/277 w-full rounded-card object-cover"
          />

          <m.div variants={stagger(0.08)} className="md:-mt-11">
            <m.div variants={fadeUp}>
              <AccentLabel
                className="gap-16 font-heading text-about-label font-bold"
                barClassName="w-30"
              >
                {about.label}
              </AccentLabel>
            </m.div>

            <m.h2
              id="apropos-titre"
              variants={fadeUp}
              className="mt-20 text-about-title font-medium tracking-[-0.02em] md:mt-26"
            >
              {about.titleBefore}
              <span className="font-extrabold text-vermilion">{about.titleFirst}</span>
              {/* L'espace avant <br> garde « Sénégal et » séparés pour les lecteurs d'écran. */}{' '}
              <br />
              {about.titleMiddle.trimStart()}
              <span className="font-extrabold text-vermilion">{about.titleSecond}</span>
            </m.h2>

            <m.p
              variants={fadeUp}
              className="mt-16 max-w-380 text-body font-medium text-ink-soft md:mt-14 md:leading-[1.32]"
            >
              {about.description}
            </m.p>

            {site.aboutMoreHref && (
              <m.div variants={fadeUp} className="mt-24 md:mt-22">
                <ButtonLink
                  to={site.aboutMoreHref}
                  variant="secondary"
                  withArrow
                  className="px-30 md:h-38"
                >
                  {about.cta}
                </ButtonLink>
              </m.div>
            )}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
