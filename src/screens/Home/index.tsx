import { useContext } from "react";
import AddButton from "../../components/AddButton";
import { ToDoModal } from "../../components/ToDoForm";
import { Background, ButtonContainer, Container } from "./styles";
import { ToDoList } from "../../components/ToDoList";
import { ToDoContext } from "../../contexts/toDoContext";

const Home = (): React.ReactNode => {
  const { isModalOpen, toggleModal } = useContext(ToDoContext);

  return (
    <>
      <Background />
      <Container>
        <ToDoList />
        <ToDoModal isOpen={isModalOpen} onClose={toggleModal} />

        <ButtonContainer>
          <AddButton onClick={toggleModal} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;
