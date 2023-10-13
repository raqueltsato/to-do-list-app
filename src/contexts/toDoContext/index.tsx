import { createContext, useState } from "react";
import { OwnProps, ToDoType, ToDoContextType } from "./types";
import { toDosMock } from "../../data";

export const ToDoContext = createContext<ToDoContextType>(
  {} as ToDoContextType
);

export const ToDoProvider = ({ children }: OwnProps) => {
  const [toDos, setToDos] = useState<ToDoType[]>(toDosMock);

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

  console.log("Todos:: ", JSON.stringify(toDos, null, 2));

  return (
    <ToDoContext.Provider value={{ toDos, handleDoneToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
