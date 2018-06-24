import React from 'react';
import PropTypes from 'prop-types';

const AlbumTile = ({ album: { title, collection } }) => (
  <div>
    { collection.length && <img src={collection[0]['artworkUrl100']} /> }
    <div>{title}</div>
  </div>
);

AlbumTile.propTypes = {
  album: PropTypes.shape({}),
};

export default AlbumTile;