import { fetchTrendingMovies } from 'fetching/fetchingMovies';

import { useState, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MoviesDetails = lazy(() => import('../Pages/MoviesDetails'));
const Review = lazy(() => import('./Review'));
const Cast = lazy(() => import('./Cast'));
const NotFound = lazy(() => import('./NotFound'));

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
          <Route path="movie" element={<Movies />} />
          <Route path="movie/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
