export const getFromLS = (name: string) => {
  return localStorage.getItem(name) ?? null;
};

export const save = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const deleteFromLS = (name: string) => {
  localStorage.removeItem(name);
};

export const dropLS = () => {
  localStorage.clear();
};
