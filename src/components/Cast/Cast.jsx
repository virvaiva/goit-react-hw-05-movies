import { getCast } from '../API/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as SC from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getCast(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <SC.SectionDiv>
      {movie.cast.length > 0 ? (
        <SC.UlCast>
          {movie.cast.map(({ id, profile_path, name, character }) => (
            <SC.Li key={id}>
              <SC.Img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo'
                }
                alt={name}
                width="200"
                height="240"
              />
              <SC.DivDescr>
                <SC.P>{name}</SC.P>
                <SC.PCharacter>Character: {character}</SC.PCharacter>
              </SC.DivDescr>
            </SC.Li>
          ))}
        </SC.UlCast>
      ) : (
        <p>No cast</p>
      )}
    </SC.SectionDiv>
  );
};
