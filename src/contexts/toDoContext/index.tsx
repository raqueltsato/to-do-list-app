import { createContext, useState } from "react";
import { OwnProps, ToDo, ToDoContextType } from "./types";

export const ToDoContext = createContext<ToDoContextType>(
  {} as ToDoContextType
);

export const ToDoProvider = ({ children }: OwnProps) => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  return (
    <ToDoContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDoContext.Provider>
  );
};
