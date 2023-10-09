import { useState } from 'react';
import sprite from '../../sprite.svg';
import {
  Characteristics,
  CharacteristicsItem,
  HomeList,
  HomeListItem,
  Img,
  ImgBox,
  SvgHeart,
  TitleBox,
  TitleName,
  TitleSpan,
} from './HomePage.styled';

const HomePage = ({ allCars }) => {
  const [visibleCars, setVisibleCars] = useState(8);
  console.log(allCars);
  const showMoreCars = () => {
    setVisibleCars(prevState => prevState + 8);
  };
  return (
    <div>
      <HomeList>
        {allCars
          .slice(0, visibleCars)
          .map(
            ({
              id,
              img,
              rentalCompany,
              type,
              model,
              mileage,
              functionalities,
              make,
              rentalPrice,
              year,
            }) => (
              <HomeListItem key={id}>
                <article>
                  <ImgBox>
                    <Img src={img} alt={make} width={320} height={250} />
                    <SvgHeart width={20} height={20}>
                      <use href={`${sprite}#icon-heart`}></use>
                    </SvgHeart>
                  </ImgBox>

                  <TitleBox>
                    <TitleName>
                      {make} <TitleSpan>{model},</TitleSpan>
                    </TitleName>
                    <TitleName>{year}</TitleName>

                    <TitleName style={{ marginLeft: 'auto' }}>
                      {rentalPrice}
                    </TitleName>
                  </TitleBox>
                  <Characteristics>
                    <CharacteristicsItem>Kiev</CharacteristicsItem>
                    <CharacteristicsItem>Ukraine</CharacteristicsItem>
                    <CharacteristicsItem>{rentalCompany}</CharacteristicsItem>
                    <CharacteristicsItem>Premium</CharacteristicsItem>
                    <CharacteristicsItem>{type}</CharacteristicsItem>
                    <CharacteristicsItem>{model}</CharacteristicsItem>
                    <CharacteristicsItem>{mileage}</CharacteristicsItem>
                    <CharacteristicsItem>
                      {functionalities[0]}
                    </CharacteristicsItem>
                  </Characteristics>
                </article>
              </HomeListItem>
            )
          )}
      </HomeList>
      <button type="button" onClick={showMoreCars}>
        Load more
      </button>
    </div>
  );
};

export default HomePage;
