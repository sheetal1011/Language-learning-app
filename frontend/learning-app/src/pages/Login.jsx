import React from 'react';
import '../pages/Login.css';

const Login = () => {
return(
<>
  
  <div className="main">
    <div className="form">
      <form>
        <span>
          <h1>Login</h1>
        </span>
        <div className="username">
          <input type="text" placeholder="Username" />
          <hr />
        </div>
        <br />
        <br />
        <div className="password">
          <input type="text" placeholder="Password" />
          <hr />
          <br />
          <br />
        </div>
        <p className="forget">Forget Password?</p>
        <div>
          <button className="btn" type="submit">
            <b>Login</b>
          </button>
        </div>
        <p className="sign">OR Sign up</p>
      </form>
    </div>
  </div>
</>
);
}

export default Login;