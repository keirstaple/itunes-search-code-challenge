import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';

import AlbumTile from './searchResults/albumTile';

const SearchResults = ({ albumResults }) => (
  <div className="search-results">
    <h4 className="albums-header">Albums</h4>
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
