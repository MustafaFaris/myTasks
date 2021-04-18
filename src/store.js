import { createStore } from "redux";
import { setLocalStorage } from "./helpers";

const getDefaultDoneTask = () => {
  const local = JSON.parse(localStorage.getItem("showDoneTasks"));
  return local?.showDoneTasks !== undefined ? local.showDoneTasks : true;
};

const TasksReducer = (state = { tasksList: [], showDoneTasks: getDefaultDoneTask() }, action) => {
  switch (action.type) {
    case "set": {
      return { ...state, tasksList: action.tasks };
    }
    case "add": {
      const newTasks = [action.task, ...state.tasksList];
      setLocalStorage("tasks", newTasks);
      return { ...state, tasksList: newTasks };
    }
    case "remove": {
      const newTasks = state.tasksList.filter((task) => task.id !== action.taskID);
      setLocalStorage("tasks", newTasks);
      return { ...state, tasksList: newTasks };
    }
    case "check": {
      const tasksClone = state.tasksList.slice();
      tasksClone.find((task) => task.id === action.taskID).done = action.isChecked;
      setLocalStorage("tasks", tasksClone);
      return { ...state, tasksList: tasksClone };
    }
    case "setDoneTasksVisibility": {
      setLocalStorage("showDoneTasks", { showDoneTasks: action.isToggled });
      return { ...state, showDoneTasks: action.isToggled };
    }
    default:
      return state;
  }
};

const store = createStore(TasksReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
