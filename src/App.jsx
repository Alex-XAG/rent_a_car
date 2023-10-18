import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import { useEffect, useState } from 'react';

export const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesLS = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favoritesLS);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/catalog"
          element={
            <CatalogPage setFavorites={setFavorites} favorites={favorites} />
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
