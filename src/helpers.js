export const getRandomID = () => Math.floor(Math.random() * 10000);

export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
