import axios from 'axios';

const KEY = '0e93aabbe6940ffc57eaa3a18a147920';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies(page = 1) {
  const url = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}page=${page}`
  );
  const { data } = await axios.get(url);
  return data.results;
}
getPopularMovies();

export async function keyWordMovies(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export const infoMovies = movieId => {
  return axios.get(`${BASE_URL}movie/{movieId}?api_key=${KEY}&language=en-US`);
};
export const infoActor = movies => {
  return axios.get(
    `${BASE_URL}movie/movie/{movie_id}/credits?api_key=${KEY}&language=en-US`
  );
};
