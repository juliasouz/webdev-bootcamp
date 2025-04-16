import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const currentDate = new Date();
const currentHour = currentDate.getHours();

let greeting = "";
let emoji = "";
let customStyle = {
    color: ""
};

if (currentHour < 12) {
    greeting = "Good Morning";
    emoji = "☀️";
    customStyle.color = "red";
} else if (currentHour < 18) {
    greeting = "Good Afternoon";
    emoji = "🌤️";
    customStyle.color = "green";
} else {
    greeting = "Good Evening";
    emoji = "🌙";
    customStyle.color = "blue";
}

root.render(
  <div className="container">
    <h1 style={customStyle}>
      {greeting} {emoji}
    </h1>
  </div>
);