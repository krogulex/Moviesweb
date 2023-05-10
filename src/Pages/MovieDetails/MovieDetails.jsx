import { fetchMovieDetails } from 'fetching/fetchingMovies';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from 'components/BackLink/BackLink';

import noImage from '../../images/no-image.jpg';
import Cast from 'components/Cast/Cast';
import Review from 'components/Review/Review';
import icons from '../../icons/symbol-defs.svg';
import { Footer } from 'components/Footer/Footer';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    loadMovieDetails(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMovieDetails = id => {
    fetchMovieDetails(id)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="movie-details__all">
      <BackLink to={backLinkHref.from} from={backLinkHref.from}>
        Back to products
      </BackLink>
      {!movie ? (
        <div></div>
      ) : (
        <div className="movie-details__content">
          <div className="movie-details__poster">
            {movie.poster_path ? (
              <img
                className="movie-details__posters"
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt="..."
              ></img>
            ) : (
              <img
                className="movie-details__posters"
                src={noImage}
                alt="..."
              ></img>
            )}
          </div>
          <div className='movie-details__describe'>
            <h2>
              {movie.original_title} {movie.release_date.split('-')[0]}
            </h2>
            <p className="user-score">
              User score: {Math.floor(movie.vote_average * 10)}%
              <svg className="icon user-score__icon">
                <use href={`${icons}#icon-star`}></use>
              </svg>
            </p>
            <h3>Overview</h3>
            <p>{movie.overview ? movie.overview : 'No overview'}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres
                ? movie.genres.map(genre => genre.name).join(', ')
                : 'No genres'}
            </p>
          </div>
          <Cast></Cast>
          <Review></Review>
          <Outlet />
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
