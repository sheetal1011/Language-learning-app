import React, { useState } from "react";
import axios from "axios";
import './Login.css';
const Login = () => {
  

  return (
    <div className="login">
      <form >
        <h1>Login</h1>
        <div className="input-row">
          <input 
            type="email" 
            placeholder="Email" 
            required 
          />
        </div>
        <div className="input-row">
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

