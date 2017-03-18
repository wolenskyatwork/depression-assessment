import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Homepage from './containers/homepage';
import Test from './containers/test';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Homepage} />
      <Route path='test' component={Test} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
