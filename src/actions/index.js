export const addUser = (name) => ({ type: "ADD_USER", payload: { name } });

export const removeUser = (id) => ({ type: "REMOVE_USER", payload: { id } });