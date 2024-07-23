import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const apiKeyParameter = 'api_key=6e8a0677e9a1e118104d10cfb5199ddd';

export const getTrendingMoviesApi = async () => {
  const { data } = await axios.get(`trending/movie/day?${apiKeyParameter}`);
  return data;
};

export const getMovieDetailsApi = async id => {
  const { data } = await axios.get(`movie/${id}?${apiKeyParameter}`);
  return data;
};

export const getMovieCastApi = async id => {
  const { data } = await axios.get(`movie/${id}/credits?${apiKeyParameter}`);
  return data;
};

export const getMovieReviewsApi = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?${apiKeyParameter}`);
  return data;
};

export const getSearchMoviesApi = async (query, page) => {
  const { data } = await axios.get(
    `search/movie?${apiKeyParameter}&query=${query}&page=${page}`
  );
  return data;
};
