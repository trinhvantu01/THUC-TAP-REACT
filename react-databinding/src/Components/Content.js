import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = "Component Content";
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>This is Content Component</h1>
        <h4>
          5.this is content of Parrent Component:{this.props.dataApp.data}
        </h4>
        <h4>6.this is content of Content Component:{this.state}</h4>
        <h4>
          7.this is content when click to button in Footer Component:
          {this.props.dataApp.b}
        </h4>
      </div>
    );
  }
}

export default Content;
