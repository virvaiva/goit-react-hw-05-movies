import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as SC from '../StyledPages/Movies.styled';
import { Search } from 'components/Search/Search';
import { FaRegSadCry } from 'react-icons/fa';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState('');
  const location = useLocation();

  return (
    <main>
      <SC.Section>
        <Search setSearchMovies={setSearchMovies} />

        {searchMovies !== '' ? (
          <div>
            <SC.UlSearch>
              {searchMovies.map(({ id, poster, title, vote_average }) => (
                <SC.Li key={id}>
                  <SC.LinkList to={`/movies/${id}`} state={{ from: location }}>
                    <SC.Img
                      src={
                        poster &&
                        poster !== 'https://image.tmdb.org/t/p/w500null'
                          ? poster
                          : 'https://i.i.ua/cards/pic/6/4/242946.jpg'
                      }
                      alt={title}
                      width="200"
                      height="240"
                    />
                    <SC.Div>
                      <SC.TitleFilm>{title} </SC.TitleFilm>
                      {vote_average !== 0 && (
                        <SC.Text>Rating: {vote_average.toFixed(1)}</SC.Text>
                      )}
                    </SC.Div>
                  </SC.LinkList>
                </SC.Li>
              ))}
            </SC.UlSearch>
          </div>
        ) : (
          <SC.P>No movies... Try to find something</SC.P>
        )}

        {searchMovies.length === 0 && searchMovies !== '' && (
          <SC.Pred>
            There is no movies with that name <FaRegSadCry size="50" />
          </SC.Pred>
        )}
      </SC.Section>
    </main>
  );
};
