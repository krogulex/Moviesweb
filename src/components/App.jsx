import {
  fetchTrendingMovies,
  fetchMovieDetails,
} from 'fetching/fetchingMovies';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { MoviesDetails } from 'Pages/MoviesDetails';
import { Review } from './Review';
import { NotFound } from './NotFound';
import { Cast } from './Cast';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');

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
