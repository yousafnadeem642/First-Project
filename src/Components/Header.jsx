import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand fw-bold">
            <i>MY Website</i>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#btn"
            aria-controls="btn"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="btn">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="/Plan" className="nav-link">
                  Plan
                </a>
              </li>

              <li className="nav-item">
                <a href="/Blog" className="nav-link">
                  Blog
                </a>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <a href="/Signup" className="btn btn-primary">
                Signup
              </a>

              <a href="/Login" className="btn btn-outline-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;