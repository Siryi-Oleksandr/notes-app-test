import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import LocaleProvider from './context/LocaleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>
);
