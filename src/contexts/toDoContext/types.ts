export type OwnProps = {
  children: React.ReactNode;
};

export type ToDoType = {
  id: string;
  description: string;
  dueToDate: string;
  done: boolean;
};

export interface ToDoContextType {
  toDos: ToDoType[];
  handleDoneToDo: (id: string) => void;
  handleRemoveToDo: (id: string) => void;
}
