import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/luna.svg";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/moonConf">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">moon</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
