import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthProvider from './providers/AuthProvider';
import Router from './router/Router';

import './assets/styles/global.css';

const queryClient = new QueryClient(); //settings

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
