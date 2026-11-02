import type { RouteObject } from 'react-router';

import { RootLayout } from '@/components/layout/RootLayout';
import { HomePage } from '@/pages/HomePage';

/**
 * Routes de l'application. La page d'accueil est chargée immédiatement (contenu LCP) ;
 * les pages secondaires sont découpées en chunks chargés à la demande.
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', lazy: () => import('@/pages/NotFoundPage') },
    ],
  },
];
