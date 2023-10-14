import { TFunction } from "i18next";
import { ToDoType } from "../../contexts/toDoContext/types";

export type OwnProps = {
  toDo: ToDoType;
  handleDoneToDo: (id: string) => void;
  handleRemoveToDo: (id: string) => void;
  t: TFunction<"locale", undefined>;
};
