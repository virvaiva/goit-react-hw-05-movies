import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as SC from './Search.styled';
import { getSearchMovies } from 'components/API/API';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { FcSearch } from 'react-icons/fc';

export const Search = ({ setSearchMovies }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const movieQuery = searchQuery.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const query = form.elements.search.value;
    if (query.trim() === '') {
      toast.error('Please, enter the Name Movie');
      return;
    }
    setSearchQuery({ query });
    form.reset();
  };

  useEffect(() => {
    if (!movieQuery) return;

    async function fetchFilms() {
      const dataFilms = await getSearchMovies(movieQuery);

      const requiredDataFilms = dataFilms.map(
        ({ id, title, poster_path: poster, vote_average }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
          vote_average,
        })
      );
      setSearchMovies(requiredDataFilms);
    }
    fetchFilms();
  }, [movieQuery, setSearchMovies]);

  return (
    <SC.Div>
      <SC.Form onSubmit={handleSubmit}>
        <SC.Input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SC.Button type="submit">
          Search
          <FcSearch size="20px" />
        </SC.Button>
      </SC.Form>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Div>
  );
};
