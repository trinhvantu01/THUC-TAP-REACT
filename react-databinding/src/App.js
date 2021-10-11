import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "App compoent" };
    this.setText = this.setText.bind(this);
  }
  setText(text) {
    this.setState({ ...this.state, ...text });
  }
  render() {
    // console.log(this.state);

    return (
      <div className="App">
        <h4>1.The content of Parent component: {this.state.data}</h4>
        <h4>
          2.this is content when click to button in Footer Component:
          {this.state.a}
        </h4>
        <Header dataApp={this.state} />
        <hr />
        <Content
          dataApp={this.state}
          textFromContent={this.state.text}
        ></Content>
        <hr />
        <Footer dataApp={this.state} setParrentText={this.setText}></Footer>
      </div>
    );
  }
}

export default App;
