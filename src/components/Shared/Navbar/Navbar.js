import React from "react";
import logo from "../../../assets/logos/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg mt-3 mb-1">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a class="nav-link" href="/">
              Our Portfolio
            </a>
            <a class="nav-link" href="/">
              Our Team
            </a>
            <a class="nav-link" href="/">
              Contact Us
            </a>
            <button class="nav-link sign-in btn-brand">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
