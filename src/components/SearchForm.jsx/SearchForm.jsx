import { useState } from 'react';
import { Form, SearchFormBox } from './SearchForm.styled';

export const SearchForm = ({ allCars, filter }) => {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(100000);
  const handleInputFrom = event => {
    setFrom(Number(event.target.value));
  };
  const handleInputTo = event => {
    setTo(Number(event.target.value));
  };
  const brands = allCars
    .flatMap(car => car.make)
    .filter((make, i, arr) => arr.indexOf(make) === i)
    .sort();

  const [selectedBrand, setSelectedBrand] = useState('');

  const handleChangeBrand = event => {
    setSelectedBrand(event.target.value);
  };

  const prices = allCars
    .flatMap(car => car.rentalPrice)
    .filter((rentalPrice, i, arr) => arr.indexOf(rentalPrice) === i);

  const numPrices = prices.map(price => Number(price.slice(1, price.length)));

  const [selectedPrice, setSelectedPrice] = useState(1000);

  const handleChangePrice = event => {
    setSelectedPrice(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    filter(selectedBrand, selectedPrice, from, to);
    event.currentTarget.reset();
  };

  return (
    <SearchFormBox>
      <Form onSubmit={handleSubmit}>
        <label>
          <p>Car brand</p>

          <select value={selectedBrand} onChange={handleChangeBrand}>
            <option>Enter the text</option>
            {brands.map(brand => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <p>Price/ 1 hour</p>

          <select value={selectedPrice} onChange={handleChangePrice}>
            <option>To $</option>
            {numPrices
              .sort((a, b) => a - b)
              .map(price => {
                return (
                  <option key={price} value={price}>
                    {`To ${price}$`}
                  </option>
                );
              })}
          </select>
        </label>

        <label>
          <p>Сar mileage / km</p>
          <input
            type="text"
            name="from"
            placeholder="From"
            onChange={handleInputFrom}
          />
          <input
            type="text"
            name="to"
            placeholder="To"
            onChange={handleInputTo}
          />
        </label>
        <button type="submit">Search</button>
      </Form>
    </SearchFormBox>
  );
};
