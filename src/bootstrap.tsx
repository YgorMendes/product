import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.less';
import '@neogrid/design-system/dist/esm/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
