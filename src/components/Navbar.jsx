import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent fade-in-up">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="navbar-brand me-5" to="/">
          My Portfolio
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-4">
            {" "}
            {/* razmak između linkova */}
            <li className="nav-item">
              <Link className="nav-link glitch-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glitch-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glitch-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link glitch-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <img src={logo} alt="DP Logo" className="logo ms-5" />
      </div>
    </nav>
  );
}

export default Navbar;
