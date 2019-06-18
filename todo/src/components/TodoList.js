import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
