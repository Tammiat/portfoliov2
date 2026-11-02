import { m } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { AccentLabel } from '@/components/ui/AccentLabel';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { selectedProjects } from '@/data/projects';
import { site } from '@/data/site';
import { useLocale } from '@/i18n/useLocale';
import { fadeUp, revealOnScroll, stagger } from '@/lib/motion';

export function SelectedProjectsSection() {
  const { t, locale } = useLocale();

  return (
    <section id="projets" aria-labelledby="projets-titre" tabIndex={-1}>
      <div className="container-mockup px-20 pt-56 md:px-52 md:pt-48">
        <div className="flex flex-wrap items-center justify-between gap-x-24 gap-y-8">
          <AccentLabel
            as="h2"
            id="projets-titre"
            className="gap-19 text-section font-extrabold tracking-[-0.02em]"
            barClassName="w-32"
          >
            {t.projects.title}
          </AccentLabel>

          {site.allProjectsHref && (
            <a
              href={site.allProjectsHref}
              className="group/link inline-flex min-h-touch items-center gap-12 font-heading text-small font-medium text-ink underline-offset-4 hover:underline"
            >
              {t.projects.viewAll}
              <ArrowUpRight aria-hidden="true" className="size-16" />
            </a>
          )}
        </div>

        <m.ul
          className="mt-28 grid gap-16 md:mt-44 md:grid-cols-3"
          variants={stagger(0.1)}
          {...revealOnScroll}
        >
          {selectedProjects.map((project) => (
            <m.li key={project.slug} variants={fadeUp}>
              <ProjectCard
                project={project}
                category={project.category[locale]}
                openLabel={t.projects.open}
              />
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}
