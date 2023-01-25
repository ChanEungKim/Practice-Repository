import { ModalContainer, ModalWrapper } from "../AppStyle";

const Modal = ({ ModalClose, isModal }) => {
  return (
    <>
      <ModalWrapper onClick={ModalClose} isModal={isModal} />

      <ModalContainer isModal={isModal}>123123</ModalContainer>
    </>
  );
};

export default Modal;
