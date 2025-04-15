import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fName = "Julia";
const lName = "Souza";
const currentDate = new Date();
const year = currentDate.getFullYear();

root.render(
  <div>
    <h1>MyFavorite Food:</h1>
    <ul style={{ fontSize: "20px" }}>
      <li>Pizza</li>
      <li>Vegetarian Sushi</li>
      <li>Cheeseburgers</li>
    </ul>
    <p>Created by {fName + ' ' + lName}</p>
    <p>Copyright {year}</p>
  </div>
);