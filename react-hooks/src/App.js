import "./App.css";
import Content from "./Component/Content";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { useState } from "react";
function App() {
  const nameApp = "1.My Name is App";
  const [dataFooter, setDataFooter] = useState("");
  const onTitle = (data) => setDataFooter(data);

  return (
    <div className="App">
      <h4>1.Đây là nội dung lấy từ Props của Component Cha: {nameApp}</h4>
      <h4>
        2.Đây là nội dung sẽ hiện thị khi click vào button 10 ở Footer:
        {dataFooter}
      </h4>
      <Content onApp={nameApp} />
      <Header onApp={nameApp}></Header>
      <Footer datafooter={onTitle} onApp={nameApp}></Footer>
    </div>
  );
}

export default App;
