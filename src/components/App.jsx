import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Home } from './pages/Home';
// import { Movies } from './pages/Movies';
// import { MovieDetails } from './pages/MoviesDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Rewies/Rewies';

const SharedLayout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MoviesDetails'));
const Reviews = lazy(() => import('./Rewies/Rewies'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
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
