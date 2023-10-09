import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(
    () => async () => {
      try {
        const allCars = await axios
          .get('https://65203df0906e276284c43e76.mockapi.io/api/adverts')
          .then(res => res.data);

        setAllCars(allCars);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  return (
    <Routes>
      <Route path="/" element={<SharedLayout allCars={allCars} />}>
        <Route index element={<HomePage allCars={allCars} />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
