import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import NotFoundImage from "../images/Outer space-bro.svg";

function NotFound() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <h1>404 : Not Found</h1>
            <h2>You're lost, but don't worry </h2>
            <Link className="btn btn-primary" to="/">
              Get Safe
            </Link>
          </div>

          <div className="Home__col d-none d-md-block col-md-7">
            <img
              src={NotFoundImage}
              alt="Astronauts"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
