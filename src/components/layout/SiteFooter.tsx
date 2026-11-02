import { site } from '@/data/site';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/15">
      <div className="container-content flex flex-wrap items-center justify-between gap-4 py-8 text-muted">
        <p className="font-heading font-bold text-ink">{site.name}</p>
        <p className="font-label text-label">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
