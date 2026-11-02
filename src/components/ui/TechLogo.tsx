import type { Technology } from '@/types/portfolio';

/** Logo d'une technologie (décoratif : le nom est toujours écrit à côté). */
export function TechLogo({
  technology,
  className,
}: {
  technology: Technology;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill={technology.color}
    >
      <path d={technology.path} />
    </svg>
  );
}
