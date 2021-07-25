import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { storeExport } from './state/index';

render(
  <Provider store={storeExport}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
