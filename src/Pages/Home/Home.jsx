import { Footer } from 'components/Footer/Footer';
import MovieList from 'components/MovieList/MovieList';
import { useEffect } from 'react';

const Home = ({ loadTrendingsMovies, movies, loadMovieDetails }) => {

  useEffect(() => {
    loadTrendingsMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='movies__container'>
      <h1 className='home-slogan'>Trending movies</h1>
{/*         {movies.map(movie => {
          console.log(movie);
          return (
            <li key={movie.id} className="movie__card">
              <Link to={`movie/${movie.id}`} state={{ from: '/' }}>
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.original_title}
                    className='movie__img'
                  />
                <div className="movie__overlay">
                  <h3>{movie.original_title}</h3>
                </div>
              </Link>
            </li>
          );
        })} */}
        <MovieList movies={movies} from={{from: '/'}} to={'movie/'} ></MovieList>
      <Footer></Footer>
    </div>
  );
};
export default Home;
