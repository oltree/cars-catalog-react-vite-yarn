import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Home from './components/screens/home/Home';

import './assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
