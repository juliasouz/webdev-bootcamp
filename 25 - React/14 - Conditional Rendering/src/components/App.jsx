import React from "react";
import Login from "./Login";

const isLoggedIn = false;

function App() {
  return (
    <div className="app">
      {isLoggedIn ? (
        <h1 className="welcome-text">Welcome back!</h1>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;