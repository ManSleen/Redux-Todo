import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <h2>Trying!</h2>
    </div>
  );
};

export default TodoList;
