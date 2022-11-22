import axios from 'axios';

const KEY = '0e93aabbe6940ffc57eaa3a18a147920';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const popularMovies = movies => {
  return axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);
};
export const keyWordMovies = movies => {
  return axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`
  );
};
export const infoMovies = movies => {
  return axios.get(`${BASE_URL}movie/{movie_id}?api_key=${KEY}&language=en-US`);
};
export const infoActor = movies => {
  return axios.get(
    `${BASE_URL}movie/movie/{movie_id}/credits?api_key=${KEY}&language=en-US`
  );
};
