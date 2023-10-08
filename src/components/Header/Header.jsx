import { useEffect } from 'react';
import { HeaderBox, HeaderForm } from './Header.styled';
import axios from 'axios';
import { useState } from 'react';

export const Header = () => {
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

  const brands = allCars
    .flatMap(car => car.make)
    .filter((make, i, arr) => arr.indexOf(make) === i)
    .sort();

  const prices = allCars
    .flatMap(car => car.rentalPrice)
    .filter((rentalPrice, i, arr) => arr.indexOf(rentalPrice) === i);

  return (
    <HeaderBox>
      <HeaderForm>
        <label>
          <p>Car brand</p>
          {/* <input type="text" name="brand" placeholder="Brand of car" /> */}
          <select>
            {brands.map(brand => {
              return (
                <option name="brand" key={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <p>Price/ 1 hour</p>
          {/* <input type="text" name="price" placeholder="Price" /> */}
          <select>
            {prices.map(price => {
              return (
                <option name="price" key={price}>
                  {price}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          <p>Сar mileage / km</p>
          <input type="text" name="from" placeholder="From" />
          <input type="text" name="to" placeholder="To" />
        </label>
        <button type="submit">Search</button>
      </HeaderForm>
    </HeaderBox>
  );
};
