import { fetchMovieReviews } from 'fetching/fetchingMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'fetching/fetchingMovies';

export const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    loadMovieReviews(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMovieReviews = id => {
    fetchMovieDetails(id, '/reviews')
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => console.log(error));
  };


  return (
    <div>
      <h2>Reviews</h2>
      {!reviews || reviews.length === 0 ? (
        <p>There are no Reviews yet.</p>
      ) : (
        <div>
          <ul>
            {reviews.map(review => {

              return (
                <li key={review.id}>
                  <h5>Author: {review.author}</h5>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
