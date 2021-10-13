import React, { Component } from "react";
import AddBook from "./Add";
import { toast } from "react-toastify";
class Book extends Component {
  state = {
    Books: [
      { id: 1, title: "I love you so" },
      { id: 2, title: "My dad love me" },
      { id: 3, title: "You!!!" },
    ],
  };

  addNewBook = (book) => {
    this.setState({
      Books: [...this.state.Books, book],
    });
    toast.success("Thêm Mới Thành Công");
  };

  handleDeleteBook = (book) => {
    // console.log(book);
    let currentBook = this.state.Books;
    currentBook = currentBook.filter((item) => item.id !== book.id);
    this.setState({
      Books: currentBook,
    });
    toast.success("Xóa Thành Công");
  };

  handleEditBook = (book) => {
    this.setState({
      editBook: book,
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
                  <button> {index + 1} </button>

                  <input value={item.title} />

                  <button
                    className="edit"
                    onClick={() => this.handleEditBook(item)}
                  >
                    {" "}
                    Edit{" "}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteBook(item)}
                  >
                    {" "}
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Book;
