import { createStore, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './state/reducers/index';
import rootSaga from './state/sagas';

const sagaMiddleware = createSagaMiddleware();
const browserHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);

export default store;
