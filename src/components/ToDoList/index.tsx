import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ToDoContext } from "../../contexts/toDoContext";
import { Card } from "../Card";

export const ToDoList = (): React.ReactNode => {
  const { toDos, handleDoneToDo, handleRemoveToDo } = useContext(ToDoContext);

  const { t } = useTranslation("locale");

  return (
    <>
      {toDos.map((toDo) => {
        return (
          <Card
            key={toDo.id}
            toDo={toDo}
            handleDoneToDo={handleDoneToDo}
            handleRemoveToDo={handleRemoveToDo}
            t={t}
          />
        );
      })}
    </>
  );
};
