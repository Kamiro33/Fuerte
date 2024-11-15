import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { worker } from './mocks/browser';  // Importa el worker

// Inicia el service worker de MSW
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
