import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class TodoForm extends React.Component {
  state = {
    userId: 1,
    id: "",
    title: "",
    completed: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: Date.now()
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      title: "",
      id: ""
    });
  };

  render() {
    console.log("this.props", this.props);
    console.log("this.state", this.state);
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
