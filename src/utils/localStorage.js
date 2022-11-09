const storageKeyToken = "user";

const saveUser = (user) =>
  localStorage.setItem(storageKeyToken, JSON.stringify(user));

const loadUser = () => JSON.parse(localStorage.getItem(storageKeyToken));

const removeUser = () => localStorage.removeItem(storageKeyToken);

export default {
  saveUser,
  loadUser,
  removeUser
};
