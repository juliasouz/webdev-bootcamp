import React from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <p>Buy milk</p>
      <p>Buy eggs</p>
      <p>Buy bread</p>
      <p>Buy butter</p>
      <button onClick={strike}>Strike Through</button>
      <button onClick={unStrike}>Remove Strike</button>
    </div>
  );
}

export default App;