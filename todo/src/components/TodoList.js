import React from "react";
import Todo from "./Todo";
import { toggleComplete } from "../actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
  toggleComplete = (e, index) => {
    e.preventDefault();
    this.props.toggleComplete(index);
  };

  render() {
    console.log(this.props);
    return (
      <div className="todo-card">
        {this.props.todos.map((todo, index) => {
          return (
            <div onClick={e => this.toggleComplete(e, index)}>
              <Todo key={todo.id} todo={todo} />
            </div>
          );
        })}
        <h2>Trying!</h2>
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
  { toggleComplete }
)(TodoList);
