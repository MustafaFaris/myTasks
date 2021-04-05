declare interface Task {
  id: number;
  title: string;
  type: "task" | "event";
  done: boolean;
}

type Tasks = task[];
