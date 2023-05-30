import React from "react";
import Header from "./Header";
import Cars from "./Cars";
import Note from "./Note";
import Buttons from "./Buttons";
import "./styles.css";

function App() {
  return (
  <div >
      <Header />
    <div className="main">
      <Buttons />
      <Note />
      <Cars />
    </div>
     

  </div>
  );
}

export default App;
