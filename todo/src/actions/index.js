export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const toggleComplete = (todo, id) => {
  return {
    type: "TOGGLE_COMPLETE",
    payload: todo
  };
};
