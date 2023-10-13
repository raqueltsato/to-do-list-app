import { ToDoType } from "../../contexts/toDoContext/types";

export type OwnProps = {
  toDo: ToDoType;
  handleDoneToDo: (id: string) => void;
};
