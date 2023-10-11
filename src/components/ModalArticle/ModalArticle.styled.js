import styled from '@emotion/styled';

export const ModalArticleBox = styled.li`
  width: 540px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border: none;
  padding-bottom: 40px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const ImgBox = styled.div`
  width: 460px;
  height: 250px;
  position: relative;
  background-color: rgba(75, 75, 75, 0.5);
  border-radius: 15px;
`;
export const Img = styled.img`
  border-radius: 15px;
`;

export const TitleName = styled.h2`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin-left: 5px;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;
export const TitleBox = styled.div`
  display: flex;
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
  line-height: 1.5;
  padding-right: 5px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const Description = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 18px;
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
`;

export const ModalUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 5px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
`;

export const ConditionsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Conditionstext = styled.p`
  padding: 7px;
  border-radius: 35px;
  background: #f9f9f9;
  margin: 0;

  color: #363535;
  font-family: Manrope;
  font-size: 12px;
  line-height: 1.5;
`;
