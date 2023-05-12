import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQueryMovie } from 'fetching/fetchingMovies';

import MovieList from 'components/MovieList/MovieList';
import { Footer } from 'components/Footer/Footer';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [queryMovies, setQueryMovies] = useState(null);

  const [desired, setDesired] = useState("desired movie")

  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null) return;
    setDesired(query)
    loadQueryMovies(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = event.target.input.value;
    form.reset();
    console.log(query)
    setSearchParams({ query: input });
  };

  const loadQueryMovies = query => {
    fetchQueryMovie(query)
      .then(response => {
        setQueryMovies(response.data.results);
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="movies__container">
      <h1 className="home-slogan">Search for {desired}</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          name="input"
          placeholder="Search..."
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      {queryMovies === null ? (
        ""
      ) : queryMovies.length === 0 ? (
        <h2 className='movies__not-found'>No movies found</h2>
      ) : (
        <div className='movie__content'>
          <MovieList
            movies={queryMovies}
            from={{ from: `/movie?query=${query}` }}
            to={''}
          ></MovieList>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Movie;
