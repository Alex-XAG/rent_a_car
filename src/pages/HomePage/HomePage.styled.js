import styled from '@emotion/styled';

export const HomeBox = styled.div`
  margin: 0;
  margin-top: -20px;
  padding: 0;
  width: 100%;
  height: 1000px;
  background-image: linear-gradient(to bottom, #000, #fff);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;

export const HomeTitle = styled.h1`
  width: 820px;
  font-weight: 700;
  font-size: 54px;
  letter-spacing: 2;

  color: #fff;
  transform: scale(1);
  transition: transform 1000ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  :hover {
    transform: scale(1.5);
  }
`;

export const HomeRec = styled.h2`
  width: 820px;
  font-weight: 700;
  font-size: 54px;
  letter-spacing: 2;
  margin-top: 20px;

  color: #fff;
  transform: scale(0.5);
  transition: transform 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    transform: scale(1.5);
  }
`;
