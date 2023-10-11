import { SearchForm } from 'components/SearchForm.jsx/SearchForm';
import { CatalogList, CatalogPageBox, LoadMore } from './CatalogPage.styled';

import { useEffect, useState } from 'react';
import { CatalogItem } from 'components/CatalogItem/CatalogItem';

const CatalogPage = ({ allCars, setFavorites, favorites }) => {
  const [visibleCars, setVisibleCars] = useState(8);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    setFilteredCars(allCars);
  }, [allCars]);

  const showMoreCars = () => {
    setVisibleCars(prevState => prevState + 8);
  };

  const filter = (make, price, from, to) => {
    const filtered = allCars
      .filter(car => {
        if (make === 'Enter the text') {
          return car;
        }
        return car.make === make;
      })
      .filter(car => {
        if (price === 'To $') {
          return car;
        }
        return Number(car.rentalPrice.slice(1)) <= price;
      });
    setFilteredCars([...filtered]);
  };
  const showBtn =
    filteredCars.slice(0, visibleCars).length === filteredCars.length
      ? true
      : false;

  return (
    <CatalogPageBox>
      <SearchForm filter={filter} allCars={allCars} />
      <CatalogList>
        {filteredCars.slice(0, visibleCars).map(car => (
          <CatalogItem
            key={car.id}
            car={car}
            favorites={favorites}
            setFavorites={setFavorites}
            allCars={allCars}
          />
        ))}
      </CatalogList>
      {!showBtn && (
        <LoadMore type="button" onClick={showMoreCars}>
          Load more
        </LoadMore>
      )}
    </CatalogPageBox>
  );
};

export default CatalogPage;
