import { CatalogListItem } from 'pages/CatalogPage/CatalogPage.styled';
import sprite from '../../sprite.svg';
import {
  Article,
  Characteristics,
  CharacteristicsItem,
  Img,
  ImgBox,
  LearnBtn,
  SvgHeart,
  TitleBox,
  TitleName,
  TitleSpan,
} from './CatalogItem.styled.js';
import { useEffect, useState } from 'react';
import BasicModalWindow from 'components/ModalContainer/ModalContainer';
import { ModalArticle } from 'components/ModalArticle/ModalArticle';

export const CatalogItem = ({ car, favorites, setFavorites, allCars }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const [modalData, setModalData] = useState(null);

  const {
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
  } = car;

  const closeModal = () => {
    setModalData(null);
  };

  const openModalToggle = el => {
    setModalData(el);
  };

  const isCarInFavorites = favorites.find(car => car.id === id);

  const toggleFavorite = carId => {
    if (!isCarInFavorites) {
      const car = allCars.find(car => car.id === carId);
      setFavorites(prevFavorites => [...prevFavorites, car]);
    } else {
      const updatedFavorites = favorites.filter(car => car.id !== carId);
      setFavorites(updatedFavorites);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <CatalogListItem>
      {modalData && (
        <BasicModalWindow closeModal={closeModal}>
          <ModalArticle car={car} />
        </BasicModalWindow>
      )}
      <Article>
        <ImgBox>
          <Img src={img} alt={make} width={320} height={250} />

          <SvgHeart
            width={20}
            height={20}
            style={isCarInFavorites ? { fill: 'blue' } : { fill: 'none' }}
            onClick={() => toggleFavorite(id)}
          >
            <use href={`${sprite}#icon-heart`}></use>
          </SvgHeart>
        </ImgBox>

        <TitleBox>
          <TitleName>
            {make} <TitleSpan>{model},</TitleSpan>
          </TitleName>
          <TitleName>{year}</TitleName>

          <TitleName style={{ marginLeft: 'auto' }}>{rentalPrice}</TitleName>
        </TitleBox>
        <Characteristics>
          <CharacteristicsItem>Kiev</CharacteristicsItem>
          <CharacteristicsItem>Ukraine</CharacteristicsItem>
          <CharacteristicsItem>{rentalCompany}</CharacteristicsItem>
          <CharacteristicsItem>Premium</CharacteristicsItem>
          <CharacteristicsItem>{type}</CharacteristicsItem>
          <CharacteristicsItem>{model}</CharacteristicsItem>
          <CharacteristicsItem>{mileage}</CharacteristicsItem>
          <CharacteristicsItem>{functionalities[0]}</CharacteristicsItem>
        </Characteristics>
        <LearnBtn type="button" onClick={() => openModalToggle(car)}>
          Learn More
        </LearnBtn>
      </Article>
    </CatalogListItem>
  );
};
