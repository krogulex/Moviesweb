import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ loadTrendingsMovies, movies, loadMovieDetails }) => {
  useEffect(() => {
    loadTrendingsMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Home-page</p>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movie/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
