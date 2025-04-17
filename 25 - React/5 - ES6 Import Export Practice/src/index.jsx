import React from "react";
import ReactDOM from "react-dom/client";
import { add, subtract, multiply, divide } from "./calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </>
);