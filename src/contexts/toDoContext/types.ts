export type OwnProps = {
  children: React.ReactNode;
};

export type ToDo = {
  id: string;
  description: string;
  date: string;
};

export interface ToDoContextType {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
