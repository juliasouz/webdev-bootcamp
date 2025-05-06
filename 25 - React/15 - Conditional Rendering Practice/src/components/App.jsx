import React from "react";
import Form from "./Form";

const isLoggedIn = false;
const userIsRegistered = false;

function App() {
  return (
    <div className="app">
      {isLoggedIn ? (
        <h1 className="welcome-text">Welcome back!</h1>
      ) : (
        <Form isRegistered={userIsRegistered} />
      )}
    </div>
  );
}

export default App;