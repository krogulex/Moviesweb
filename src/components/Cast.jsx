import { fetchMovieCast } from 'fetching/fetchingMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'fetching/fetchingMovies';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    loadMovieCast(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMovieCast = id => {
    fetchMovieDetails(id, '/credits')
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      {!cast || cast.length === 0 ? (
        <p>There are no Cast.</p>
      ) : (
        <div>
          <h2>Cast</h2>
          <ul>
            {cast.map(cast => {
              return (
                <li key={cast.id}>
                  {cast.profile_path ? (
                    <img
                      className="cast-img"
                      src={
                        'https://image.tmdb.org/t/p/w500' + cast.profile_path
                      }
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
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
