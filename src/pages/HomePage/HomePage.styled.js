import styled from '@emotion/styled';

export const HomeList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  gap: 20px;
`;

export const HomeListItem = styled.li`
  width: 320px;
  /* height: 426px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 320px;
  height: 250px;
  background-color: rgba(75, 75, 75, 0.5);
  border-radius: 15px;
`;
export const Img = styled.img`
  border-radius: 15px;
`;

export const SvgHeart = styled.svg`
  stroke: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const TitleBox = styled.div`
  display: flex;
`;

export const TitleName = styled.h2`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  margin-left: 5px;
`;

export const TitleSpan = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
`;

export const Characteristics = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  gap: 5px;
  padding-right: 5px;
`;
export const CharacteristicsItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  padding-right: 5px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;
