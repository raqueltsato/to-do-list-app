import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { OwnProps, ToDoType, ToDoContextType } from "./types";

export const ToDoContext = createContext<ToDoContextType>(
  {} as ToDoContextType
);

export const ToDoProvider = ({ children }: OwnProps) => {
  const [toDos, setToDos] = useState<ToDoType[]>(
    JSON.parse(localStorage.getItem("toDos") as string) || []
  );

  const handleDoneToDo = (id: string) => {
    const newTodos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, done: !toDo.done };
      } else {
        return toDo;
      }
    });
    setToDos(newTodos);
  };

  const handleRemoveToDo = (toDoId: string) => {
    const newTodos = toDos.filter(({ id }) => id !== toDoId);
    setToDos(newTodos);
  };

  const handleAddToDo = (description: string, dueToDate: number) => {
    const newToDo = {
      id: uuid(),
      description,
      dueToDate,
      done: false,
    };
    setToDos([...toDos, newToDo]);
  };

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDoContext.Provider
      value={{ toDos, handleDoneToDo, handleRemoveToDo, handleAddToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
