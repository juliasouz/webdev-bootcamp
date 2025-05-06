import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <div className="form-container">
      <h1>{props.isRegistered ? "Login" : "Register"}</h1>
      <form className="form">
        <Input
          type="email"
          placeholder="Email Address"
        />
        {!props.isRegistered && (
          <Input type="text" placeholder="Full Name" />
        )}
        <Input type="password" placeholder="Password" />
        {!props.isRegistered && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        {props.isRegistered && (
          <>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <p className="forgot-password">Forgot password?</p>
          </>
        )}
        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
      {props.isRegistered ? (
        <p className="register-link">
          Not registered? <a href="#register">Create an account</a>
        </p>
      ) : (
        <p className="register-link">
          Already have an account? <a href="#login">Login</a>
        </p>
      )}
    </div>
  );
}

export default Form;