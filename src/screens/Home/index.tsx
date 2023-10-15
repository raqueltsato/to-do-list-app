import { useContext } from "react";
import AddButton from "../../components/AddButton";
import { ToDoModal } from "../../components/ToDoForm";
import { Background, ButtonContainer, Container } from "./styles";
import { ToDoList } from "../../components/ToDoList";
import { ToDoContext } from "../../contexts/toDoContext";

const Home = (): React.ReactNode => {
  const { modal, toggleModal } = useContext(ToDoContext);

  return (
    <>
      <Background />
      <Container>
        <ToDoList />
        <ToDoModal isOpen={modal.isOpen} />

        <ButtonContainer>
          <AddButton onClick={() => toggleModal()} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;
