import axios from 'axios';

const KEY = '0e93aabbe6940ffc57eaa3a18a147920';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getPopularMovies(page = 1) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`;
  const { data } = await axios.get(url);
  return data.results;
}
getPopularMovies();

export async function getAllMovies(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export async function getSearchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
}
export async function getCast(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}
export async function infoActor(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data.results;
}
