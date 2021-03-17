import React, { useState } from "react";

export const AppContext = React.createContext();

const getDefaultDoneTask = () => {
  const local = JSON.parse(localStorage.getItem("showDoneTasks"));
  return local?.showDoneTasks !== undefined ? local.showDoneTasks : true;
};

const ContextProvider = ({ children }) => {
  const [tasksList, setTaskList] = useState([]);
  const [showDoneTasks, setDoneTasks] = useState(getDefaultDoneTask());

  const updateTaskList = newTasks => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskList(newTasks);
  };

  const setDoneTasksVisibility = checked => {
    setDoneTasks(checked);
    localStorage.setItem("showDoneTasks", JSON.stringify({ showDoneTasks: checked }));
  };

  const addNewTask = task => {
    const tasks = [task, ...tasksList];
    updateTaskList(tasks);
  };

  const onTaskRemove = taskID => {
    const tasks = tasksList.filter(task => task.id !== taskID);
    updateTaskList(tasks);
  };

  const onTaskChange = (taskID, checked) => {
    const tasksClone = tasksList.slice();
    tasksClone.find(task => task.id === taskID).done = checked;
    updateTaskList(tasksClone);
  };

  return (
    <AppContext.Provider
      value={{ tasksList, showDoneTasks, setDoneTasksVisibility, addNewTask, onTaskRemove, setTaskList, onTaskChange }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
