import dummyData from "../dummy-data";

const initialState = {
  todos: dummyData
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case "TOGGLE_CONPLETED":
      return {
        ...state,
        todos: [...state.todos]
      };
    default:
      return state;
  }
};
