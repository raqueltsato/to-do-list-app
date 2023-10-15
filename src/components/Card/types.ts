import { TFunction } from "i18next";
import { ToDoType } from "../../contexts/toDoContext/types";

export type OwnProps = {
  toDo: ToDoType;
  handleEditToDo: (toDo: Partial<ToDoType>) => void;
  handleRemoveToDo: (id: string) => void;
  toggleModal: (id?: string) => void;
  t: TFunction<"locale", undefined>;
};
