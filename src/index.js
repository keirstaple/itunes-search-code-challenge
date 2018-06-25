import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import './styles/index.css';
import Home from './views/Home';
import registerServiceWorker from './utils/registerServiceWorker';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
