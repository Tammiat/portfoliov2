import { Outlet } from 'react-router';

import { useScrollToHash } from '@/hooks/useScrollToHash';

import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { SkipLink } from './SkipLink';

const MAIN_CONTENT_ID = 'contenu';

export function RootLayout() {
  useScrollToHash();

  return (
    <>
      <SkipLink targetId={MAIN_CONTENT_ID} />
      <SiteHeader />
      <main id={MAIN_CONTENT_ID} tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
