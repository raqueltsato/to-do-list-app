import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ToDoContext } from "../../contexts/toDoContext";
import { Card } from "../Card";
import { ListContainer } from "./styles";

export const ToDoList = (): React.ReactNode => {
  const { toDos, handleEditToDo, handleRemoveToDo, toggleModal } =
    useContext(ToDoContext);

  const { t } = useTranslation("locale");

  return (
    <ListContainer>
      {toDos.map((toDo) => {
        return (
          <Card
            key={toDo.id}
            toDo={toDo}
            handleEditToDo={handleEditToDo}
            handleRemoveToDo={handleRemoveToDo}
            toggleModal={toggleModal}
            t={t}
          />
        );
      })}
    </ListContainer>
  );
};
