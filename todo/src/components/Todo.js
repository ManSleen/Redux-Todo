import React from "react";

const Todo = props => {
  return (
    <div className={`todo-card${props.todo.completed ? " completed" : ""}`}>
      <h2>{props.todo.title}</h2>
    </div>
  );
};

export default Todo;
