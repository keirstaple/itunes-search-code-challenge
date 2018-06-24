import { createStore, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './state/reducers/index';

const browserHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;