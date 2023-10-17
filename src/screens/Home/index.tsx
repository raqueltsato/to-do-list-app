import { useContext } from "react";
import AddButton from "../../components/AddButton";
import { ToDoModal } from "../../components/ToDoForm";
import { Background, ButtonContainer, Container, Header } from "./styles";
import { ToDoList } from "../../components/ToDoList";
import { ToDoContext } from "../../contexts/toDoContext";
import todolist from "../../assets/todolist.png";

const Home = (): React.ReactNode => {
  const { modal, toggleModal } = useContext(ToDoContext);

  return (
    <>
      <Background />
      <Header>
        <img src={todolist} height="55%" />
      </Header>
      <Container>
        <ToDoList />
        <ToDoModal isOpen={modal.isOpen} />

        <ButtonContainer>
          <AddButton data-testid="addbutton" onClick={() => toggleModal()} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;
