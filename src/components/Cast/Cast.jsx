import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { fetchMovieDetails } from 'fetching/fetchingMovies';

const Cast = () => {
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
    <div className="cast">
      {!cast || cast.length === 0 ? (
        <div>No cast</div>
      ) : (
          <div className="cast__content">
            <h2>Cast</h2>
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={10}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 25,
                },
              }}
              className="mySwiper"
            >
              {cast.map((cast, index) => {
                return (
                  <SwiperSlide key={index} id={cast.id}>
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
                    <div className="cast__overlay">
                      <p className="cast__name">{cast.name}</p>
                      <p className="cast__character">{cast.character}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
      )}
    </div>
  );
};

export default Cast;
