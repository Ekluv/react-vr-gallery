import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // thunk middleware for aync actions in redux(doing things redux way)
import { Router, browserHistory } from 'react-router';

import HomePage from './containers/Home';
import rootReducer from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.querySelector('.container-fluid'))