import { ArrowUpRight } from 'lucide-react';

import { cx } from '@/lib/cx';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  category: string;
  /** Libellé accessible complémentaire du lien (ex. « Voir le projet »). */
  openLabel: string;
}

/**
 * Carte projet : couverture assombrie, titre et métadonnées toujours visibles.
 * Avec une URL, toute la carte est cliquable (lien étendu sur le titre) et l'icône ↗ apparaît.
 */
export function ProjectCard({ project, category, openLabel }: ProjectCardProps) {
  const { name, cover, stack, href } = project;
  const meta = [category, ...stack];

  return (
    <article className="group/card relative isolate aspect-300/193 overflow-hidden rounded-card bg-ink text-white">
      <img
        src={cover}
        alt=""
        width={297}
        height={189}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-(--duration-slow) ease-standard group-hover/card:scale-[1.04]"
      />
      {/* Assombrissement de la maquette pour garantir la lisibilité du texte blanc. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-ink/85 via-ink/35 via-55% to-ink/5"
      />

      <div className="flex size-full flex-col justify-end px-20 pb-18">
        <h3 className="max-w-215 font-heading text-card-title font-extrabold tracking-[-0.02em]">
          {href ? (
            <a
              href={href}
              className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:-outline-offset-4 focus-visible:after:outline-white"
            >
              {name} <span className="sr-only">— {openLabel}</span>
            </a>
          ) : (
            name
          )}
        </h3>
        <p className="mt-6 font-heading text-card-meta font-medium text-white/90">
          {meta.map((item, index) => (
            <span key={item} className="whitespace-nowrap">
              {index > 0 && (
                <span aria-hidden="true" className="mx-4">
                  ·
                </span>
              )}
              {index > 0 && <span className="sr-only">, </span>}
              {item}
            </span>
          ))}
        </p>
      </div>

      {href && (
        <span
          aria-hidden="true"
          className={cx(
            'absolute top-15 right-16 grid size-26 place-items-center rounded-full border-[1.5px] border-white/90',
            'transition-colors duration-(--duration-base) group-hover/card:bg-white group-hover/card:text-ink',
          )}
        >
          <ArrowUpRight strokeWidth={2} className="size-14" />
        </span>
      )}
    </article>
  );
}
