import { Form, SearchFormBox } from './SearchForm.styled';

export const SearchForm = ({ allCars }) => {
  const brands = allCars
    .flatMap(car => car.make)
    .filter((make, i, arr) => arr.indexOf(make) === i)
    .sort();

  const prices = allCars
    .flatMap(car => car.rentalPrice)
    .filter((rentalPrice, i, arr) => arr.indexOf(rentalPrice) === i);

  const numPrices = prices.map(price => Number(price.slice(1, price.length)));

  return (
    <SearchFormBox>
      <Form>
        <label>
          <p>Car brand</p>
          {/* <input type="text" name="brand" placeholder="Brand of car" /> */}
          <select>
            <option>Enter the text</option>
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
            <option>To $</option>
            {numPrices
              .sort((a, b) => a - b)
              .map(price => {
                return (
                  <option name="price" key={price}>
                    {`To ${price}$`}
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
      </Form>
    </SearchFormBox>
  );
};
