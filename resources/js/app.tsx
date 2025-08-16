import '../css/app.css';
import './app.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import { AuthProvider } from './context/AuthContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
 title: (title) => (title ? `${title} - ${appName}` : appName),
 // 🔹 Chemin exact vers tes pages (majuscules sensibles)
 resolve: (name) =>
  resolvePageComponent(
   `./Pages/${name}.tsx`,
   import.meta.glob('./Pages/**/*.tsx')
  ),
 setup({ el, App, props }) {
  const root = createRoot(el);

  root.render(
   <AuthProvider>
    <App {...props} />
   </AuthProvider>
  );
 },
 progress: {
  color: 'cyan',
 },
});

// Initialisation du thème (dark/light)
initializeTheme();
