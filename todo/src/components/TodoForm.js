import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class TodoForm extends React.Component {
  state = {
    userId: 1,
    id: Date.now(),
    title: "",
    completed: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            placeholder="Todo"
          />
          <button onClick={this.addTodo}>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
