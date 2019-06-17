import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div>
      <h2>{props.todo.title}</h2>
      <p>
        <strong>Completed: </strong>
        {props.todo.completed ? "true" : "false"}
      </p>
    </div>
  );
};

export default Todo;
