import { useState } from "react";
import AddButton from "../../components/AddButton";
import { ToDoModal } from "../../components/ToDoForm";
import { Background, ButtonContainer, Container } from "./styles";
import { ToDoList } from "../../components/ToDoList";

const Home = (): React.ReactNode => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Background />
      <Container>
        <ToDoList />
        <ToDoModal isOpen={isModalOpen} onClose={handleCloseModal} />

        <ButtonContainer>
          <AddButton onClick={handleOpenModal} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;
