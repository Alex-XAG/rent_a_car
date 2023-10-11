import { LearnBtn } from 'components/CatalogItem/CatalogItem.styled';
import { TitleSpan } from 'pages/CatalogPage/CatalogPage.styled';
import {
  Article,
  Characteristics,
  CharacteristicsItem,
  ConditionsBox,
  Conditionstext,
  Description,
  Img,
  ImgBox,
  ModalArticleBox,
  ModalUl,
  TitleBox,
  TitleName,
} from './ModalArticle.styled';

export const ModalArticle = ({ car }) => {
  const {
    img,
    rentalCompany,
    type,
    model,
    mileage,
    accessories,
    functionalities,
    make,
    rentalPrice,
    year,
    description,
    rentalConditions,
  } = car;

  const conditions = rentalConditions.split('\n');

  return (
    <ModalArticleBox>
      <Article>
        <ImgBox>
          <Img src={img} alt={make} width={460} height={250} />
        </ImgBox>

        <TitleBox>
          <TitleName>
            {make} <TitleSpan>{model},</TitleSpan>
          </TitleName>
          <TitleName>{year}</TitleName>
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
        <Description>{description}</Description>
        <div>
          <Description>Accessories and functionalities:</Description>
          <ModalUl>
            {accessories.map(acs => (
              <CharacteristicsItem key={acs}>{acs}</CharacteristicsItem>
            ))}
          </ModalUl>
          <ModalUl>
            {functionalities.map(func => (
              <CharacteristicsItem key={func}>{func}</CharacteristicsItem>
            ))}
          </ModalUl>
        </div>

        <Description>Rental Conditions: </Description>
        <ConditionsBox>
          <Conditionstext>{conditions[0]}</Conditionstext>
          <Conditionstext>{conditions[1]}</Conditionstext>
          <Conditionstext>{conditions[2]}</Conditionstext>
          <Conditionstext>
            Mileage:{' '}
            <span style={{ color: 'blue', fontWeight: '700' }}>
              {mileage.toString().split('', 2).join(',') +
                mileage.toString().slice(2, 4)}
            </span>
          </Conditionstext>
          <Conditionstext>
            Price:{' '}
            <span style={{ color: 'blue', fontWeight: '700' }}>
              {rentalPrice.slice(1)}$
            </span>
          </Conditionstext>
        </ConditionsBox>

        <a href="tel:+380730000000">
          <LearnBtn type="button">Rental car</LearnBtn>
        </a>
      </Article>
    </ModalArticleBox>
  );
};
