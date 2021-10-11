import React, { useState } from "react";

function Header(props) {
  const { onApp } = props;
  const [title, setTitle] = useState("title component Header");
  return (
    <div>
      <h1>This is Header Component</h1>
      <h4>6.Đây là nội dung lấy từ Component Cha:{onApp}</h4>
      <h4>7.đây là nội dung của component Header:{title} </h4>
    </div>
  );
}

export default Header;
