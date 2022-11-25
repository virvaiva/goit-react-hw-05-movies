import React from 'react';
import * as SC from './MoviesDetails.styled';
import PropTypes from 'prop-types';

export const MoviesDetails = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  showModal,
  photoInfo,
}) => (
  <SC.MoviesGallery key={id} onClick={showModal}>
    <SC.MoviesItemImage
      src={webformatURL}
      alt={tags}
      dataLargeimageurl={largeImageURL}
      onClick={() => {
        photoInfo(largeImageURL);
      }}
    />
  </SC.MoviesGallery>
);
MoviesDetails.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  showModal: PropTypes.func,
};
