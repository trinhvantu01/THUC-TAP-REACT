import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = "Header";
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>This is Header Component</h1>
        <h4>3. this is content of Header Component: {this.state}</h4>
        <h4>
          4.this is content of Parrent Component: {this.props.dataApp.data}
        </h4>
      </div>
    );
  }
}
export default Header;
