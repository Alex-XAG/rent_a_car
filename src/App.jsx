import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [allCars, setAllCars] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesLS = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favoritesLS);
  }, []);

  useEffect(() => {
    const getCars = async () => {
      try {
        await axios
          .get('https://65203df0906e276284c43e76.mockapi.io/api/adverts')
          .then(res => {
            setAllCars(res.data);
            return res.data;
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCars();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/catalog"
          element={
            <CatalogPage
              setFavorites={setFavorites}
              favorites={favorites}
              allCars={allCars}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage setFavorites={setFavorites} favorites={favorites} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
