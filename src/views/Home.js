import React, { Component } from 'react';

import SearchBox from './Home/searchBox';
import '../styles/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <SearchBox />
      </div>
    );
  }
}

export default Home;
