import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

// NOTE: In a real StackBlitz environment, the user must set the VITE_CONVEX_URL
// For the generated code to fail gracefully if not set, we add a check.
const convexUrl = (import.meta as any).env.VITE_CONVEX_URL || "https://mock-convex-url.convex.cloud";

const convex = new ConvexReactClient(convexUrl);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);