import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as SC from '../StyledPages/MoviesDetails.styled';
import { getAllMovies } from 'components/API/API';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [filmsInfo, setFilmsInfo] = useState();

  useEffect(() => {
    getAllMovies(movieId).then(setFilmsInfo);
  }, [movieId]);

  if (!filmsInfo) {
    return null;
  }
  const releaseDate = filmsInfo.release_date;
  let date = new Date(releaseDate);

  return (
    <main>
      <SC.Section>
        <SC.AButton to={location.state?.from ?? '/'}>Go back</SC.AButton>

        <SC.FilmCardDiv>
          <img
            src={'https://image.tmdb.org/t/p/w500' + filmsInfo.poster_path}
            alt={filmsInfo.title}
            width="300"
            loading="lazy"
          />

          <div>
            <SC.H1>
              {filmsInfo.title} ({date.getFullYear()})
            </SC.H1>
            <SC.P>{`User score: ${(filmsInfo.vote_average * 10).toFixed(
              2
            )}%`}</SC.P>
            <SC.H2>Overview:</SC.H2>
            <SC.P>{filmsInfo.overview}</SC.P>

            <SC.H2>Genres:</SC.H2>
            <SC.P>{filmsInfo.genres.map(({ name }) => name).join(', ')}</SC.P>
          </div>
        </SC.FilmCardDiv>
        <SC.SectionDiv>
          <SC.H3>Additional information</SC.H3>
          <SC.Ul>
            <SC.Li>
              <SC.LinkList
                to="cast"
                state={{ from: location.state?.from ?? 'movies' }}
              >
                Cast
              </SC.LinkList>
            </SC.Li>
            <SC.Li>
              <SC.LinkList
                to="reviews"
                state={{ from: location.state?.from ?? '/movies' }}
              >
                Reviews
              </SC.LinkList>
            </SC.Li>
          </SC.Ul>
        </SC.SectionDiv>
        <Outlet />
      </SC.Section>
    </main>
  );
}
