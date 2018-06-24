import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from './store';
import './styles/index.css';
import Home from './views/Home';
import registerServiceWorker from './utils/registerServiceWorker';

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path='/' component={Home} />
      </div>
    </Provider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
