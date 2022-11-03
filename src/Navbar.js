import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-light">
      <nav
        // style={{ position: "fixed" }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <img className="m-3" src="naira4dollar_images/background_image.png" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={{ gap: "50px" }}
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link btn btn-primary me-2 px-4" href="#">
              Sign in
            </a>
            <a className="nav-item nav-link btn btn-primary me-5 px-4" href="#">
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
