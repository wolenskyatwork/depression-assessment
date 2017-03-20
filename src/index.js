import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Homepage from './components/homepage';
import Test from './containers/test';
import Results from './containers/results';
import configureStore from './store/configureStore';
import routes from './constants/routes';
import './App.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={ routes.HOME } component={ Homepage } />
      <Route path={ routes.RESULTS } component={ Results } />
      <Route path={ routes.TEST } component={ Test } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
