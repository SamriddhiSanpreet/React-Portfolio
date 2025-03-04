import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot
import App from './App';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';

// Use createRoot instead of ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
