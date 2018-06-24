import React from 'react';
import PropTypes from 'prop-types';

const AlbumTile = ({ album }) => (
  <div>{album.title}</div>
);

AlbumTile.propTypes = {
  album: PropTypes.shape({}),
};

export default AlbumTile;