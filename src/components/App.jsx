import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Layout } from './Layout/Layout';
import { Movies } from './MovieBar/Moviebar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};
