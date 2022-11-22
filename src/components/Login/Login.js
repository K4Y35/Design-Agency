import React from "react";
import googleICon from "../../assets/icons/googleIcon.png";
import logo from "../../assets/logos/logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-div">
      <div className="login-logo-div">
        <img className="login-div-logo" src={logo} alt="" />
      </div>
      <div className="login-card">
        <h5>Login with</h5>
        <button className="continueWithGoogle-btn">
          <img className="googleicon" src={googleICon} alt="" />
          Continue with Google
        </button>
        <p>
          Don't have an account? <a href="/signup">Create and account.</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
