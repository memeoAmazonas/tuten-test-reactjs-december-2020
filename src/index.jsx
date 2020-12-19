import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import regeneratorRuntime from 'regenerator-runtime';
import history from './history';
import registerServiceWorker from './registerServiceWorker';

import './internationalization/i18n';
import Page from './views/layout/page';
import configureStore from './redux/store';

import './stylesheets/main.scss';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('app'),
);
if (module.hot) {
  module.hot.accept();
}
registerServiceWorker();
