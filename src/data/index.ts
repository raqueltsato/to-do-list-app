import { ToDoType } from "../contexts/toDoContext/types";

export const toDosMock: ToDoType[] = [
  {
    id: "1",
    description: "Ir ao mercado",
    dueToDate: "15/10/2023",
    done: false,
  },
  {
    id: "2",
    description: "Estudar programação",
    dueToDate: "16/10/2023",
    done: true,
  },
  {
    id: "3",
    description: "Passear com cachorro",
    dueToDate: "17/10/2023",
    done: false,
  },
];
