import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Router from './router/Router';

import './assets/styles/global.css';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>
);
