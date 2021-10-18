import React, { Component } from "react";
import AddBook from "./Add";
import { toast } from "react-toastify";
class Book extends Component {
  state = {
    listBook: [
      { id: 1, title: "I love you so" },
      { id: 2, title: "My dad love me" },
      { id: 3, title: "You!!!" },
    ],
  };

  addNewBook = (book) => {
    this.setState({
      listBook: [...this.state.listBook, book],
    });
    toast.success("Thêm Mới Thành Công");
  };

  handleDeleteBook = (book) => {
    // console.log(book);
    let currentBook = this.state.listBook;
    currentBook = currentBook.filter((item) => item.id !== book.id);
    this.setState({
      listBook: currentBook,
    });
    toast.success("Xóa Thành Công");
  };

  handleEditBook = (bookId, event) => {
    console.log(bookId);
    let books = this.state.listBook.slice();
    for (let i = 0; i < books.length; i++) {
      let book = books[i];
      if (books.id == bookId) {
        books[i].title = event.target.value;
        this.setState({ listBook: books });
      }
    }
  };

  render() {
    let { listBook } = this.state;

    return (
      <div className="list-book-container">
        <AddBook books={this.state.listBook} addNewBook={this.addNewBook} />
        <div className="list-book-content">
          {listBook &&
            listBook.length > 0 &&
            listBook.map((item, index) => {
              return (
                <div className="book-child" key={index}>
                  <button> {item.id} </button>

                  <input
                    defaultValue={item.title}
                    onChange={(event) => this.handleEditBook(event)}
                  />

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

        <table border="2">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.listBook.map((book, key) => {
              return (
                <tr key={key}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Book;
