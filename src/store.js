import { getRandomID } from "helpers";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const defaultTasks = [
  {
    id: getRandomID(),
    title: "Go to gym",
    type: "task",
  },
  {
    id: getRandomID(),
    title: "Do the laundry",
    type: "event",
  },
  {
    id: getRandomID(),
    title: "Potato Potato",
    type: "task",
    done: true,
  },
];

let store = (set) => ({
  tasksList: defaultTasks,
  setTasks: (tasks) => set(() => ({ tasksList: tasks })),
  addTask: (task) => set((state) => ({ tasksList: [task, ...state.tasksList] })),
  removeTask: (taskID) =>
    set((state) => {
      return { tasksList: state.tasksList.filter((task) => task.id !== taskID) };
    }),
  checkTask: (taskID, isChecked) =>
    set((state) => {
      const tasksClone = state.tasksList.slice();
      tasksClone.find((task) => task.id === taskID).done = isChecked;
      return { tasksList: tasksClone };
    }),
  showDoneTasks: true,
  setDoneTasksVisibility: (isChecked) =>
    set(() => ({
      showDoneTasks: isChecked,
    })),
});

store = devtools(store);
store = persist(store, { name: "appStore" });

const useStore = create(store);

export default useStore;
