import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { CatalogList } from 'pages/CatalogPage/CatalogPage.styled';
import { NavLink, useLocation } from 'react-router-dom';

const FavoritesPage = ({ favorites, setFavorites }) => {
  // const { favorites } = useStateContext();
  const location = useLocation();

  return (
    <>
      <NavLink to={location.state?.from || '/'}>Go back</NavLink>

      <CatalogList>
        {favorites.length ? (
          favorites.map(car => (
            <CatalogItem
              key={car.id}
              car={car}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        ) : (
          <p>Your favorites is empty</p>
        )}
      </CatalogList>
    </>
  );
};

export default FavoritesPage;
