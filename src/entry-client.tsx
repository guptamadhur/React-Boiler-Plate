import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  hydrateRoot(rootElement,  (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ));
}
