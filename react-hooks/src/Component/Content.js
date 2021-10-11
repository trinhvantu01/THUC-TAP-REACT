import React, { useState } from "react";

function Content(props) {
  const { onApp } = props;
  const [title, setTitle] = useState("title component Content");
  return (
    <div>
      <h1>This is Content Component</h1>
      <h4>3.Đây là nội dung lấy từ component Cha: {onApp}</h4>
      <h4>4.đây là nội dung của component Content: {title}</h4>
      <h4>5. đây là nội dung khi click vào button 10 ở component Footer:</h4>
    </div>
  );
}

export default Content;
