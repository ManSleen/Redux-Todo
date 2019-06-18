import React from "react";
import Todo from "./Todo";
import { toggleComplete, deleteTodo } from "../actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
  toggleComplete = (e, index) => {
    e.preventDefault();
    this.props.toggleComplete(index);
  };

  deleteTodo = (e, index) => {
    e.preventDefault();
    this.props.deleteTodo(index);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.todos.map((todo, index) => {
          return (
            <div className="todo">
              <div onClick={e => this.toggleComplete(e, index)}>
                <Todo key={todo.id} todo={todo} />
              </div>

              <div className="todo-delete-button">
                <button onClick={e => this.deleteTodo(e, index)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleComplete, deleteTodo }
)(TodoList);
