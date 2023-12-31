import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MainBox } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <MainBox>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </MainBox>
  );
};

export default SharedLayout;
