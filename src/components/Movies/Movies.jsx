import React from 'react';
import * as SC from './Movies.styled';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';
import PropTypes from 'prop-types';

export const Movies = ({ movies, movieInfo }) => {
  return (
    <SC.Movies>
      {movies.map(movie => (
        <MoviesDetails
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          //   showModal={showModal}
          movieInfo={movieInfo}
        />
      ))}
    </SC.Movies>
  );
};

Movies.propTypes = {
  pictures: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  showModal: PropTypes.func,
  photoInfo: PropTypes.func,
};
