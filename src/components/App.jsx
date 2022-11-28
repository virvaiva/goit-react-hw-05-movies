import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './Layout/Layout';
import { Movies } from './pages/Movies';
import { MovieDetails } from './pages/MoviesDetails';
import { Reviews } from './Rewies/Rewies';
import { Cast } from './Cast/Cast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer theme="colored" autoClose={3000} />
    </>
  );
};
