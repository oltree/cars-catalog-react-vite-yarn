import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Router from './router/Router';

import './assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
