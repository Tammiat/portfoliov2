import '@/styles/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';

import { App } from '@/app/App';
import { routes } from '@/app/router';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Élément #root introuvable dans index.html');

const router = createBrowserRouter(routes);

createRoot(rootElement).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>,
);
