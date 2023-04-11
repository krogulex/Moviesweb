import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';

export const App = () => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';


  const fetchImages = async (search) => {
    try {
      const response = await axios.get(`/trending/get-trending?api_key=94b6513cf590015bbbe7f5f52292222e`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const loadMovies = (search) => {
    setIsLoading(true);

    setTimeout(() => {
      fetchImages(search)
        .then(response=> {
          setImages([...images, ...response.data.hits]);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    }, 1000);
  };


  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home loadMovies={loadMovies} />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
