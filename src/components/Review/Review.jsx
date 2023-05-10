import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'fetching/fetchingMovies';
import icons from '../../icons/symbol-defs.svg';

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

  const handleClick = id => {
    const text = document.getElementsByClassName(id);
    if (text[0].classList.contains('read-more')) {
      text[0].classList.remove('read-more');
      text[1].innerHTML = 'Read More';
    } else {
      text[0].classList.add('read-more');
      text[1].innerHTML = 'Read Less';
    }
  };

  return (
    <div className='reviews'>
      {!reviews || reviews.length === 0 ? (
        <div>
          <h2>Reviews</h2>
          <p> no reviews yet...</p>
        </div>
      ) : (
        <div>
          <h2>Reviews - {reviews.length}</h2>
          <ul className="review__list">
            {reviews.map(review => {
              return (
                <li key={review.id} className="review__item">
                  <p className="review__user">
                    <svg className="icon">
                      <use href={`${icons}#icon-person`}></use>
                    </svg>
                    @{review.author}
                  </p>
                  <h5 className="review__user">
                    <svg className="icon">
                      <use href={`${icons}#icon-star`}></use>
                    </svg>
                    {review.author_details.rating
                      ? review.author_details.rating
                      : '-'}
                    /10
                  </h5>
                  <div
                    id={review.id}
                    className={`review__text ${review.id}`}
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                  <button
                    className={`review__button ${review.id}`}
                    onClick={() => handleClick(review.id)}
                  >
                    Read more
                  </button>
                  <div className="review__line"></div>
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
