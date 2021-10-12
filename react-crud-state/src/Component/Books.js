import React, { Component } from "react";
import AddBook from "./Add";
class Book extends Component {
  state = {
    Books: [
      { id: 1, title: "I love you so" },
      { id: 2, title: "You!!!" },
    ],
  };

  addNewBook = (todo) => {
    this.setState({
      Books: [...this.state.Books, todo],
    });
  };
  render() {
    let { Books } = this.state;
    return (
      <div className="list-book-container">
        <AddBook addNewBook={this.addNewBook} />
        <div className="list-book-content">
          {Books &&
            Books.length > 0 &&
            Books.map((item, index) => {
              return (
                <div className="book-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Book;
