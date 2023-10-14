import { ToDoType } from "../contexts/toDoContext/types";

export const toDosMock: ToDoType[] = [
  {
    id: "1",
    description: "Ir ao mercado",
    dueToDate: new Date("2023/10/15").getTime(),
    done: false,
  },
  {
    id: "2",
    description: "Estudar programação",
    dueToDate: new Date("2023/10/16").getTime(),
    done: true,
  },
  {
    id: "3",
    description: "Passear com cachorro",
    dueToDate: new Date("2023/10/17").getTime(),
    done: false,
  },
];
