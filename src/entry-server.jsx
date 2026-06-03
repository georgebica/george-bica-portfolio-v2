import { renderToStaticMarkup } from 'react-dom/server';
import App from './App.jsx';

// Rendered at build time by prerender.js and injected into dist/index.html.
// We render static markup (no hydration markers) because the browser entry
// mounts a fresh tree with createRoot().render().
export function render() {
  return renderToStaticMarkup(<App />);
}
