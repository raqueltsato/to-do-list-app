import { createContext, useState } from "react";
import { OwnProps, ToDoType, ToDoContextType } from "./types";
import { toDosMock } from "../../data";

export const ToDoContext = createContext<ToDoContextType>(
  {} as ToDoContextType
);

export const ToDoProvider = ({ children }: OwnProps) => {
  const [toDos, setToDos] = useState<ToDoType[]>(toDosMock);

  return (
    <ToDoContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDoContext.Provider>
  );
};
