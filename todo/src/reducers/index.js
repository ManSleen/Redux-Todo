import dummyData from "../dummy-data";

const initialState = {
  todos: dummyData
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};
