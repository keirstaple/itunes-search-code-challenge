import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/fp/isEmpty';

import SearchBox from './home/searchBox';
import SearchResults from './home/searchResults';
import { albumResultsSelector } from '../state/selectors/search';
import '../styles/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { albumResults } = this.props;
    console.log(albumResults);
    return (
      <div className="Home">
        <SearchBox />
        { !isEmpty(albumResults) && <SearchResults albumResults={albumResults} /> }
      </div>
    );
  }
}

export default connect(
  state => ({
    albumResults: albumResultsSelector(state),
  }),
)(Home);
