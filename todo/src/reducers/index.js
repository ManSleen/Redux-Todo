import dummyData from "../dummy-data";
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from "../actions";

const initialState = {
  todos: dummyData
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (action.payload === index) {
            console.log("action.payload", action.payload);
            console.log({ ...todo });

            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          if (action.payload !== index) {
            return {
              ...todo
            };
          }
        })
      };
    default:
      return state;
  }
};
