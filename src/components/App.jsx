import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './Layout/Layout';
// import { Movies } from './Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </>
  );
};
