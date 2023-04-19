import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'fetching/fetchingMovies';

const Review = () => {
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
        <div></div>
      ) : (
        <div>
          <ul>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <h5>Author: {review.author}</h5>
                  <div dangerouslySetInnerHTML={{__html:review.content}} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Review;
