import {
  HeaderBox,
  HeaderLogo,
  HeaderNav,
  HeaderNavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogo>RentalCar</HeaderLogo>
      <HeaderNav>
        <HeaderNavLink to="/">Home page</HeaderNavLink>
        <HeaderNavLink to="/catalog">Catalog</HeaderNavLink>
        <HeaderNavLink to="/favorites">Favorites</HeaderNavLink>
      </HeaderNav>
    </HeaderBox>
  );
};
