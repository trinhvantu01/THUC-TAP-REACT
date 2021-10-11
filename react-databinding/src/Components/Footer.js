import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "Footer Component 1",
      b: "Footer Component 2",
      c: "Footer Component 3",
    };
    this.callToParent = this.callToParent.bind(this);
  }

  callToParent() {
    this.props.setParrentText(this.state);
  }
  render() {
    return (
      <div>
        <h1>This is Footer Component</h1>
        <h4>8.this is content of Footer Component:{this.state.a}</h4>
        <h4>
          9.this is content of Parrent Component:{this.props.dataApp.data}
        </h4>
        <button onClick={this.callToParent}>Click here</button>
      </div>
    );
  }
}

export default Footer;
