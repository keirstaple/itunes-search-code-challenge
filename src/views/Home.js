import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';

import SearchBox from './Home/searchBox';
import SearchResults from './Home/searchResults';
import SearchError from './Home/searchError';
import { albumResultsSelector, searchErrorSelector } from '../state/selectors/search';
import '../styles/App.css';

class Home extends Component {
  render() {
    const { albumResults, searchError } = this.props;
    return (
      <div className="Home">
        <SearchBox />
        { !isEmpty(albumResults) && <SearchResults albumResults={albumResults} /> }
        { !isEmpty(searchError) && <SearchError /> }
      </div>
    );
  }
}

Home.propTypes = {
  albumResults: PropTypes.array,
  searchError: PropTypes.object,
}

export default connect(
  state => ({
    searchError: searchErrorSelector(state),
    albumResults: albumResultsSelector(state),
  }),
)(Home);
