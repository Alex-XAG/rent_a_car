import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MainBox } from './SharedLayout.styled';
import { SearchForm } from 'components/SearchForm.jsx/SearchForm';

const SharedLayout = ({ allCars }) => {
  return (
    <MainBox>
      <Header />
      <SearchForm allCars={allCars} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainBox>
  );
};

export default SharedLayout;
