import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter } from 'react-router';

import { App } from '@/app/App';
import { routes } from '@/app/router';

/** Rend l'application complète (vraies routes) à l'URL donnée. */
export function renderApp(initialEntry = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [initialEntry] });
  const user = userEvent.setup();
  return { user, router, ...render(<App router={router} />) };
}
