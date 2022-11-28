import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularMovies } from 'components/API/API';
import * as SC from 'components/StyledPages/Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <SC.Section>
      <SC.Title>Popular movies today</SC.Title>
      <SC.PopUl>
        {movies.map(({ id, poster_path, title, vote_average }) => (
          <SC.PopLi key={id}>
            <SC.LinkList to={`/movies/${id}`} state={{ from: location }}>
              <SC.PopImg
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                    : 'https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo'
                }
                alt={title}
                width="200"
                height="240"
              />
              <SC.PopDiv>
                <SC.PopTitle>{title} </SC.PopTitle>
                {vote_average !== 0 && (
                  <SC.PopText>Rating: {vote_average.toFixed(1)}</SC.PopText>
                )}
              </SC.PopDiv>
            </SC.LinkList>
          </SC.PopLi>
        ))}
      </SC.PopUl>
    </SC.Section>
  );
};
