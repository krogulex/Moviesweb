import { Wrapper, Input, Icon } from 'components/App.stylled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQueryMovie } from 'fetching/fetchingMovies';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [queryMovies, setQueryMovies] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null) return;
    loadQueryMovies(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = event.target.input.value;
    form.reset();
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
    <div>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="input" />
          <button type="submit">
            <Icon />
          </button>
        </form>
      </Wrapper>
      {queryMovies && (
        <ul>
          {queryMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: '/movie' }}>
                  {movie.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
