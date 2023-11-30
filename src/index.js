import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="https://lawyer0901.github.io/react-router-dom-practice/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
