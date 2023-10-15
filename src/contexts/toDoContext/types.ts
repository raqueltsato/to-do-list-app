export type OwnProps = {
  children: React.ReactNode;
};

export type ToDoType = {
  id: string;
  description: string;
  dueToDate: number;
  done: boolean;
};

export interface ToDoContextType {
  toDos: ToDoType[];
  isModalOpen: boolean;
  toggleModal: () => void;
  handleDoneToDo: (id: string) => void;
  handleRemoveToDo: (id: string) => void;
  handleAddToDo: (description: string, dueToDate: number) => void;
}
