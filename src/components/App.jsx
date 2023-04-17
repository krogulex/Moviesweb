import { fetchTrendingMovies } from 'fetching/fetchingMovies';

import { useState, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
/* 
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movie/Movie';
import { MoviesDetails } from 'Pages/MovieDetails/MovieDetails';
import { Review } from './Review/Review';
import { Cast } from './Cast/Cast';
import { NotFound } from './NotFound/NotFound'; */

const Home = lazy(async () => await import('../Pages/Home/Home'));
const Movie = lazy(async () => await import('../Pages/Movie/Movie'));
const MovieDetails = lazy(async () => await import('../Pages/MovieDetails/MovieDetails'));
const Review = lazy(async () => await import('./Review/Review'));
const Cast = lazy(async () => await import('./Cast/Cast'));
const NotFound = lazy(() => import('./NotFound/NotFound')); 

export const App = () => {
  const [movies, setMovies] = useState([]);

  const loadTrendingsMovies = () => {
    fetchTrendingMovies()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.log(error));
  };

  /*   const loadMovieDetails = (movie_id) => {
    fetchMovieDetails(movie_id)
      .then(response => {
        console.log(response);
        setMovie(response);
      })
      .catch(error => console.log(error));
  }; */

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                loadTrendingsMovies={loadTrendingsMovies}
                movies={movies} /* loadMovieDetails={loadMovieDetails} */
              />
            }
          />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
