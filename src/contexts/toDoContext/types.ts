export type OwnProps = {
  children: React.ReactNode;
};

export type ToDoType = {
  id: string;
  description: string;
  dueToDate: number;
  done: boolean;
};

export type ModalType = {
  isOpen: boolean;
  toDoId?: string;
};

export interface ToDoContextType {
  toDos: ToDoType[];
  modal: ModalType;
  toggleModal: (id?: string) => void;
  handleRemoveToDo: (id: string) => void;
  handleAddToDo: (description: string, dueToDate: number) => void;
  getToDo: (id: string) => ToDoType | undefined;
  handleEditToDo: (toDo: Partial<ToDoType>) => void;
}
