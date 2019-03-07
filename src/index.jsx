import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import store from './store/store';
import App from './components/App/App';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);
