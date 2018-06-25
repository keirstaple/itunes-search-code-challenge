import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './state/reducers/index';
import rootSaga from './state/sagas';

const sagaMiddleware = createSagaMiddleware();

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
  rootReducer,
  composeSetup(
    applyMiddleware(
      sagaMiddleware,
    ),
  )
);
sagaMiddleware.run(rootSaga);

export default store;
