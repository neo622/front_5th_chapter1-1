export const state = {
  loggedIn: false,
};

export const getUser = () => {
  return window.localStorage.getItem("user") || null;
};

export const setUser = (value) => {
  window.localStorage.setItem("user", value);
};
