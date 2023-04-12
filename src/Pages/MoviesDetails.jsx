import { fetchMovieDetails } from 'fetching/fetchingMovies';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink';

export const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

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
    <div>
          <BackLink to={backLinkHref}>Back to products</BackLink>
      {!movie ? (
        <p>Movies not found</p>
      ) : (
        <div>
          <div>
            {movie.poster_path ? (
              <img
                className="img"
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt="No images"
              ></img>
            ) : (
              <img
                className="cast-img"
                src={
                  'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg'
                }
                alt="No images"
              ></img>
            )}
          </div>
          <div>
            <h2>
              {movie.original_title} {movie.release_date.split('-')[0]}
            </h2>
            <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
          <hr></hr>
          <div>
            <h4>Additional Information</h4>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`review`}>review</Link>
              </li>
            </ul>
          </div>
          <hr></hr>
          <Outlet />
        </div>
      )}
    </div>
  );
};
