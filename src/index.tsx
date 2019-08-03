// This must be the first line in src/index.ts
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'tslib';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);
