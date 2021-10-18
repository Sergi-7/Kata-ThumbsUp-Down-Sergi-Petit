import { useState } from "react";
import "./App.css";
import FlipIcon from "./Components/Icon/Icon.js";

function App() {
  return (
    <FlipIcon
      icon1={"fas fa-thumbs-up"}
      icon2={"fas fa-thumbs-down"}
    ></FlipIcon>
  );
}

export default App;
