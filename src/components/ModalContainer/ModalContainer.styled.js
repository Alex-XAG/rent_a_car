import styled from '@emotion/styled';

export const BasicWindow = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(239, 237, 232, 0.7);
`;

export const Modal = styled.div`
  border-radius: 24px;
  position: relative;
`;
export const ButtonClouse = styled.button`
  width: 22px;
  height: 22px;

  border: none;
  background: #fff;
  position: absolute;
  top: 14px;
  right: 14px;
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const SvgClouse = styled.svg`
  width: 24px;
  height: 24px;

  stroke: #000;
`;
