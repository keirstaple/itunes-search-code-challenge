import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';

import AlbumTile from './searchResults/albumTile';
import NoResults from './searchResults/noResults';

const SearchResults = ({ albumResults }) => (
  <div className="search-results">
    <span>Albums</span>
    { isEmpty(albumResults) && <NoResults /> }
    <div id="albums-container">
      { 
        !isEmpty(albumResults)
        && albumResults.map((values, id) => <AlbumTile key={id} album={values} />)
      }
    </div>
  </div>
);

SearchResults.propTypes = {
  albumResults: PropTypes.arrayOf(PropTypes.shape({})),
}

export default SearchResults;
