import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { OwnProps, ToDoType, ToDoContextType } from "./types";
import { useDebounce } from "../../hooks";

export const ToDoContext = createContext<ToDoContextType>(
  {} as ToDoContextType
);

export const ToDoProvider = ({ children }: OwnProps) => {
  const [toDos, setToDos] = useState<ToDoType[]>(
    JSON.parse(localStorage.getItem("toDos") as string) || []
  );

  useDebounce(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  });

  const handleDoneToDo = (id: string) => {
    const newTodos = (prev: ToDoType[]) =>
      prev.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, done: !toDo.done };
        } else {
          return toDo;
        }
      });
    setToDos(newTodos);
  };

  const handleRemoveToDo = (toDoId: string) => {
    setToDos((prev) => prev.filter(({ id }) => id !== toDoId));
  };

  const handleAddToDo = (description: string, dueToDate: number) => {
    const newToDo = {
      id: uuid(),
      description,
      dueToDate,
      done: false,
    };

    setToDos((prev) => [...prev, newToDo]);
  };

  return (
    <ToDoContext.Provider
      value={{ toDos, handleDoneToDo, handleRemoveToDo, handleAddToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
