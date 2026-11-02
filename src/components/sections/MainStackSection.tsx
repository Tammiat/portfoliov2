import { m } from 'framer-motion';

import { AccentLabel } from '@/components/ui/AccentLabel';
import { TechLogo } from '@/components/ui/TechLogo';
import { mainStack } from '@/data/stack';
import { useLocale } from '@/i18n/useLocale';
import { fadeUp, revealOnScroll, stagger } from '@/lib/motion';

export function MainStackSection() {
  const { t } = useLocale();

  return (
    <section id="stack" aria-labelledby="stack-titre" tabIndex={-1}>
      <div className="container-mockup flex flex-col gap-24 px-20 pt-64 pb-56 md:flex-row md:items-center md:gap-0 md:px-52 md:pt-71 md:pb-52">
        <AccentLabel
          as="h2"
          id="stack-titre"
          className="shrink-0 gap-14 font-heading text-eyebrow font-extrabold tracking-[0.16em] whitespace-nowrap uppercase md:ml-8"
          barClassName="w-32"
        >
          {t.stack.title}
        </AccentLabel>

        <span aria-hidden="true" className="hidden h-px w-54 shrink-0 bg-line md:ml-26 md:block" />

        <m.ul
          className="grid grid-cols-3 gap-x-16 gap-y-24 md:-ml-2 md:flex md:gap-x-0"
          variants={stagger(0.06)}
          {...revealOnScroll}
        >
          {mainStack.map((technology) => (
            <m.li
              key={technology.name}
              variants={fadeUp}
              className="flex flex-col items-center gap-8 md:w-128"
            >
              <TechLogo technology={technology} className="size-32" />
              <span className="font-heading text-stack font-medium text-ink">
                {technology.name}
              </span>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}
