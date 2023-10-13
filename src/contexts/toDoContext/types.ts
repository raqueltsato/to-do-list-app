export type OwnProps = {
  children: React.ReactNode;
};

export type ToDo = {
  description: string;
  date: string;
};

export interface ToDoContextType {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
