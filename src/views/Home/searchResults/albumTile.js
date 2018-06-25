import React from 'react';
import PropTypes from 'prop-types';

const AlbumTile = ({ album: { title, collection } }) => (
  <div className="album-tile">
    { collection.length && <img src={collection[0]['artworkUrl100']} alt={title} /> }
    <h5>{title}</h5>
  </div>
);

AlbumTile.propTypes = {
  album: PropTypes.shape({}),
};

export default AlbumTile;