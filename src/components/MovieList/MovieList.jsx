import { Link } from 'react-router-dom';

const MovieList = ({ movies, from, to }) => {
  return (
    <ul className="movie__list">
      {movies.map(movie => {
        return (
          <li key={movie.id} className="movie__card">
            <Link to={`${to}${movie.id}`} state={{from}}>
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                className="movie__img"
              />
              <div className="movie__overlay">
                <h3>{movie.original_title}</h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
