import { FaRegTimesCircle } from "react-icons/fa";
import { CloseButton, ModalContainer, ModalContent } from "./styles";
import { OwnProps } from "./types";

export const ToDoModal = ({ isOpen, onClose }: OwnProps) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaRegTimesCircle />
        </CloseButton>
        <p>Título</p>
      </ModalContent>
    </ModalContainer>
  );
};
