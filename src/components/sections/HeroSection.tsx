import { m } from 'framer-motion';

import heroIllustration from '@/assets/illustrations/hero-modern-heritage.webp';
import { AccentLabel } from '@/components/ui/AccentLabel';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { useLocale } from '@/i18n/useLocale';
import { fadeUp, settle, stagger } from '@/lib/motion';

/** Dimensions source de l'illustration (px), pour réserver sa place et éviter le CLS. */
const ILLUSTRATION = { width: 604, height: 678 } as const;

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section
      id="accueil"
      aria-labelledby="accueil-titre"
      tabIndex={-1}
      className="overflow-x-clip bg-paper-warm md:-mt-94 md:pt-94"
    >
      <div className="relative container-mockup flex flex-col md:block md:min-h-584">
        <m.div
          className="relative z-10 px-20 pt-40 md:px-64 md:pt-83"
          initial="hidden"
          animate="visible"
          variants={stagger(0.1, 0.1)}
        >
          <m.div variants={fadeUp}>
            <AccentLabel
              className="gap-13 font-heading text-eyebrow font-extrabold tracking-[0.2em] uppercase"
              barClassName="w-26"
            >
              {t.hero.eyebrow}
            </AccentLabel>
          </m.div>

          {/* Titre en anglais dans les deux versions : langue déclarée pour les lecteurs d'écran. */}
          <m.h1
            id="accueil-titre"
            lang="en"
            variants={fadeUp}
            className="mt-20 max-w-470 text-hero font-extrabold tracking-[-0.04em] text-ink md:mt-25"
          >
            {t.hero.titleLead}
            <span className="text-vermilion">.</span>
          </m.h1>

          <m.p
            variants={fadeUp}
            className="mt-20 max-w-400 text-lead font-medium text-ink-soft md:mt-22"
          >
            {t.hero.description}
          </m.p>

          <m.div variants={fadeUp} className="mt-32 flex flex-wrap gap-12 md:mt-38 md:gap-20">
            <ButtonLink to={{ hash: 'projets' }} withArrow className="h-48 px-24">
              {t.hero.primaryCta}
            </ButtonLink>
            <ButtonLink to={{ hash: 'apropos' }} variant="secondary" className="h-48 px-29">
              {t.hero.secondaryCta}
            </ButtonLink>
          </m.div>
        </m.div>

        {/* Illustration : remonte derrière le header sur desktop, comme dans la maquette. */}
        <m.div
          className="pointer-events-none relative mt-24 ml-auto w-full max-w-520 origin-bottom-right md:absolute md:-top-94 md:right-[min(0px,calc((80rem_-_100vw)/2))] md:mt-0 md:w-604 md:max-w-none"
          initial="hidden"
          animate="visible"
          variants={settle}
        >
          <img
            src={heroIllustration}
            alt={t.hero.illustrationAlt}
            width={ILLUSTRATION.width}
            height={ILLUSTRATION.height}
            fetchPriority="high"
            decoding="async"
            className="w-full"
          />
        </m.div>
      </div>
    </section>
  );
}
