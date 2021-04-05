export const getTasks = (): Tasks => {
  const defaultTasks: any = [
    {
      id: getRandomID(),
      title: "Got to gym",
      type: "task",
      done: false,
    },
    {
      id: getRandomID(),
      title: "Do the laundry",
      type: "event",
      done: false,
    },
    {
      id: getRandomID(),
      title: "Potato Potato",
      type: "task",
      done: true,
    },
  ];

  const localTasks = getLocalStorage("tasks");
  return localTasks || defaultTasks;
};

export const getRandomID = (): number => Math.floor(Math.random() * 10000);

export const setLocalStorage = (name: string, value: unknown): void => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorage = (name: string): any => {
  return JSON.parse(localStorage.getItem(name) || "");
};
