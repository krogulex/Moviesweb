import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'components/Footer/Footer';
import MovieList from 'components/MovieList/MovieList';

const Home = ({ loadTrendingsMovies, movies }) => {
  useEffect(() => {
    loadTrendingsMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="movies__container">
      <h1 className="home-slogan">Trending movies</h1>
      <MovieList movies={movies} from={{ from: '/' }} to={'movie/'}></MovieList>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
export default Home;
