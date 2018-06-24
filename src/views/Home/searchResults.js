import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';

import AlbumTile from './searchResults/albumTile';
import NoResults from './searchResults/noResults';

const SearchResults = ({ albumResults }) => (
  <div className="search-results">
    <span>Results</span>
    { isEmpty(albumResults) && <NoResults /> }
    { 
      !isEmpty(albumResults)
      && albumResults.map((values, id) => <AlbumTile key={id} album={values} />)
    }
  </div>
);

SearchResults.propTypes = {
  albumResults: PropTypes.arrayOf(PropTypes.shape({})),
}

export default SearchResults;
