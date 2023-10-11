import {
  BasicWindow,
  ButtonClouse,
  Modal,
  SvgClouse,
} from './ModalContainer.styled';
import sprite from '../../sprite.svg';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const BasicModalWindow = ({ children, closeModal }) => {
  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', closeESC);
    return () => {
      document.removeEventListener('keydown', closeESC);
    };
  }, [closeModal]);

  const handleClickBackground = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const modal = (
    <BasicWindow onClick={handleClickBackground}>
      <Modal>
        <ButtonClouse onClick={() => closeModal()}>
          <SvgClouse>
            <use href={`${sprite}#icon-x`}></use>
          </SvgClouse>
        </ButtonClouse>

        {children}
      </Modal>
    </BasicWindow>
  );

  return createPortal(modal, document.querySelector('#root_modal'));
};

export default BasicModalWindow;
