import React from "react";
import "../pages/Login.css";

const Login = () => {
  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <div className="input-row">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-row">
          <input type="text" placeholder="Password" required />
        </div>
        <p className="forget">Forget Password?</p>
        <button type="submit">Login</button>
        <div className="signup-option">
          <p>OR Sign up</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
