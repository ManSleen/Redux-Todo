import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <hr />
        <TodoList todos={this.props.todos} />
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
  {}
)(App);
