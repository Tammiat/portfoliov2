import { LazyMotion, MotionConfig } from 'framer-motion';
import { RouterProvider, type RouterProviderProps } from 'react-router/dom';

import { LocaleProvider } from '@/i18n/LocaleProvider';

const loadMotionFeatures = () => import('@/lib/motion-features').then((module) => module.default);

interface AppProps {
  router: RouterProviderProps['router'];
}

/**
 * Racine de l'application.
 * - MotionConfig reducedMotion="user" : toutes les animations respectent prefers-reduced-motion.
 * - LazyMotion strict : impose les composants `m` légers et charge les features à la demande.
 * - LocaleProvider : langue FR / EN et attribut lang du document.
 */
export function App({ router }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadMotionFeatures} strict>
        <LocaleProvider>
          <RouterProvider router={router} />
        </LocaleProvider>
      </LazyMotion>
    </MotionConfig>
  );
}
