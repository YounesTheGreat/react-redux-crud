export const addUser = (name) => ({ type: "ADD_USER", payload: { name } });

export const removeUser = (name) => ({ type: "REMOVE_USER", payload: { name } });