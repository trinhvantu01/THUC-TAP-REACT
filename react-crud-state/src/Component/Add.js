import React, { Component } from "react";
class addBook extends Component {
  state = {
    title: "",
  };
  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAdd = () => {
    let book = {
      id: Math.floor(Math.random() * 10),
      title: this.state.title,
    };
    this.props.addNewBook(book);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-book">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />

        <button type="button" className="add" onClick={() => this.handleAdd()}>
          Add
        </button>
      </div>
    );
  }
}
export default addBook;
