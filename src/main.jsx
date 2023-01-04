import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Store from './app/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </Provider>,
);
