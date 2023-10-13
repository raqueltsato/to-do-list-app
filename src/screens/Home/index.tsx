import { useState } from "react";
import AddButton from "../../components/AddButton";
import Card from "../../components/Card";
import { ToDoModal } from "../../components/ToDoForm";
import { ButtonContainer, Container } from "./styles";

const Home = (): React.ReactNode => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  console.log(isModalOpen);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <ToDoModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <ButtonContainer>
        <AddButton onClick={handleOpenModal} />
      </ButtonContainer>
    </Container>
  );
};

export default Home;
