export const getTasks = () => {
  const defaultTasks = [
    {
      id: getRandomID(),
      title: "Got to gym",
      type: "task"
    },
    {
      id: getRandomID(),
      title: "Do the laundry",
      type: "event"
    },
    {
      id: getRandomID(),
      title: "Potato Potato",
      type: "task",
      done: true
    }
  ];

  const localTasks = JSON.parse(localStorage.getItem("tasks"));
  return localTasks || defaultTasks;
};

export const getRandomID = () => Math.floor(Math.random() * 10000);

export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
