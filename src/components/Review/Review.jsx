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

  const handleClick = (id) => {
    const text = document.getElementsByClassName(id)
    console.log(text[1])
    if (text[0].classList.contains("read-more")) {
      text[0].classList.remove("read-more");
      text[1].innerHTML= 'Read More'
    } else {
      text[0].classList.add("read-more");
      text[1].innerHTML = 'Read Less'
    }
  }

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
                  <h5>Rating: {review.author_details.rating}/10</h5>
                  <div id={review.id} className={`review__text ${review.id}`} dangerouslySetInnerHTML={{__html:review.content}} />
                  <button className={`review__button ${review.id}`} onClick={() => handleClick(review.id)}>Read more</button>
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
