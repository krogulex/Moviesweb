import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const api_key = '94b6513cf590015bbbe7f5f52292222e'

export const fetchTrendingMovies = async () => {
    try {
      const response = await axios.get(`/trending/movie/week?api_key=${api_key}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchMovieDetails = async (movie_id, purpose) => {
    try {
      const response = await axios.get(`/movie/${movie_id}${purpose}?api_key=${api_key}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchQueryMovie = async (query) => {
    try {
      const response = await axios.get(`/search/movie?api_key=${api_key}&query=${query}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
/* 
  export const fetchMovieReviews = async (movie_id) => {
    try {
      const response = await axios.get(`/movie/${movie_id}/reviews?api_key=${api_key}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchMovieCast = async (movie_id) => {
    try {
      const response = await axios.get(`/movie/${movie_id}/credits?api_key=${api_key}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

 */

