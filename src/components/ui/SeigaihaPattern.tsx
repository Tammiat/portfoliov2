/**
 * Motif de vagues japonaises (seigaiha) de la section À propos. Purement décoratif.
 * Chaque vague = demi-cercles concentriques remplis de la couleur du fond,
 * ce qui produit le chevauchement caractéristique.
 */
const waves: ReadonlyArray<readonly [number, number]> = [
  // [x, y] du centre, de l'arrière vers l'avant
  [222, 44],
  [262, 62],
  [146, 82],
  [204, 98],
  [262, 116],
  [88, 122],
  [146, 136],
  [204, 152],
  [30, 160],
];

const radii = [44, 36, 28, 20, 12];

export function SeigaihaPattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 254 146"
      aria-hidden="true"
      focusable="false"
      className={className}
      overflow="hidden"
      fill="none"
    >
      {waves.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <path d={`M ${cx - 46} ${cy} A 46 46 0 0 1 ${cx + 46} ${cy} Z`} className="fill-paper" />
          {radii.map((r) => (
            <path
              key={r}
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              className="stroke-clay-soft"
              strokeWidth="3"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
