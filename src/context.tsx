import React, { useReducer, useState } from "react";
import { setLocalStorage, getLocalStorage } from "./helpers";

export const AppContext = React.createContext<any>({});

type Actions =
  | { type: "set"; tasks: Task[] }
  | { type: "add"; task: Task }
  | { type: "remove"; taskID: number }
  | { type: "check"; taskID: number; isChecked: boolean };

const getDefaultDoneTask = (): boolean => {
  const local: { showDoneTasks: boolean } = getLocalStorage("showDoneTasks");
  return local?.showDoneTasks !== undefined ? local.showDoneTasks : true;
};

const TasksReducer = (tasksList: Task[], action: Actions) => {
  switch (action.type) {
    case "set": {
      return action.tasks;
    }
    case "add": {
      const newTasks = [action.task, ...tasksList];
      setLocalStorage("tasks", newTasks);
      return newTasks;
    }
    case "remove": {
      const newTasks = tasksList.filter((task: Task) => task.id !== action.taskID);
      setLocalStorage("tasks", newTasks);
      return newTasks;
    }
    case "check": {
      const tasksClone: Tasks = tasksList.slice();
      tasksClone.find((task) => task.id === action.taskID).done = action.isChecked;
      setLocalStorage("tasks", tasksClone);
      return tasksClone;
    }
    default:
      return tasksList;
  }
};

const ContextProvider: React.FC = ({ children }) => {
  const [tasksList, updateTasksList] = useReducer(TasksReducer, []);
  const [showDoneTasks, setDoneTasks] = useState<boolean>(getDefaultDoneTask());

  const setDoneTasksVisibility = (isChecked: boolean): void => {
    setDoneTasks(isChecked);
    setLocalStorage("showDoneTasks", { showDoneTasks: isChecked });
  };

  return (
    <AppContext.Provider value={{ tasksList, updateTasksList, showDoneTasks, setDoneTasksVisibility }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
