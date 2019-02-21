import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
