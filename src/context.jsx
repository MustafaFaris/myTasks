import React, { useReducer, useState } from "react";
import { setLocalStorage } from "./helpers";

export const AppContext = React.createContext();

const getDefaultDoneTask = () => {
  const local = JSON.parse(localStorage.getItem("showDoneTasks"));
  return local?.showDoneTasks !== undefined ? local.showDoneTasks : true;
};

const TasksReducer = (tasksList, action) => {
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
      const newTasks = tasksList.filter(task => task.id !== action.taskID);
      setLocalStorage("tasks", newTasks);
      return newTasks;
    }
    case "check": {
      const tasksClone = tasksList.slice();
      tasksClone.find(task => task.id === action.taskID).done = action.isChecked;
      setLocalStorage("tasks", tasksClone);
      return tasksClone;
    }
    default:
      return tasksList;
  }
};

const ContextProvider = ({ children }) => {
  const [tasksList, updateTasksList] = useReducer(TasksReducer, []);
  const [showDoneTasks, setDoneTasks] = useState(getDefaultDoneTask());

  const setDoneTasksVisibility = isChecked => {
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
