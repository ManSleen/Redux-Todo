import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import dummyData from "./dummy-data";

import "./App.css";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <hr />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
