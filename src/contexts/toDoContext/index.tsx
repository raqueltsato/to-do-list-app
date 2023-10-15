import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDebounce } from "../../hooks";
import { OwnProps, ToDoType, ToDoContextType, ModalType } from "./types";

export const ToDoContext = createContext<ToDoContextType>(
  {} as ToDoContextType
);

export const ToDoProvider = ({ children }: OwnProps) => {
  const [toDos, setToDos] = useState<ToDoType[]>(
    JSON.parse(localStorage.getItem("toDos") as string) || []
  );
  const [modal, setModal] = useState<ModalType>({ isOpen: false, toDoId: "" });

  useDebounce(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  });

  const toggleModal = (id?: string) => {
    setModal((prev) => {
      const isOpen = !prev.isOpen;

      return { isOpen, toDoId: isOpen ? id : "" };
    });
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

  const getToDo = (id: string) => {
    return toDos.find((toDo) => toDo.id === id);
  };

  const handleEditToDo = (toDo: Partial<ToDoType>) => {
    const newTodos = (prev: ToDoType[]) =>
      prev.map((prevToDo) => {
        if (prevToDo.id === toDo.id) {
          return { ...prevToDo, ...toDo };
        } else {
          return prevToDo;
        }
      });

    setToDos(newTodos);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        modal,
        toggleModal,
        handleRemoveToDo,
        handleAddToDo,
        getToDo,
        handleEditToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
