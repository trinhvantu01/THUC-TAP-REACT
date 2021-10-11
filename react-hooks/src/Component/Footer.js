import React, { useState } from "react";

function Footer({ datafooter, onApp }) {
  const [title, setTitle] = useState("title component footer");

  return (
    <div>
      <h1>This is Footer Component</h1>
      <h4>8.đây là nội dung của component Footer:{title} </h4>
      <h4>9.Đây là nội dung lấy từ component Cha:{onApp}</h4>
      <button onClick={() => datafooter(title)}>10.Click Here</button>
    </div>
  );
}

export default Footer;
