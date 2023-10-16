import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ToDoContext } from "../../contexts/toDoContext";
import { Card } from "../Card";
import { EmptyContainer, ListContainer } from "./styles";
import empty from "../../assets/empty.png";

export const ToDoList = (): React.ReactNode => {
  const { toDos, handleEditToDo, handleRemoveToDo, toggleModal } =
    useContext(ToDoContext);

  const { t } = useTranslation(["locale", "list"]);

  return (
    <ListContainer>
      {!toDos.length ? (
        <EmptyContainer>
          <img src={empty} width="80%" data-testid="emptyimage" />
          <p>{t("list:emptyList")}</p>
        </EmptyContainer>
      ) : (
        toDos.map((toDo) => {
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
        })
      )}
    </ListContainer>
  );
};
