import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  width: 1440px;

  background-image: linear-gradient(to right, #000, #fff 80%);
`;

export const HeaderLogo = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 1.2;
  color: #fff;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 1.2;
  color: #000;

  padding: 10px 20px;

  border: 1px solid #000;
  border-radius: 15px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
`;
