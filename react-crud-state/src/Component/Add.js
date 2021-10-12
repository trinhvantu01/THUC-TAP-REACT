import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAdd = () => {
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />
        {this.state["title"]}

        <button type="button" className="add" onClick={() => this.handleAdd()}>
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
