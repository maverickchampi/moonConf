import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import NotFoundImage from "../images/Outer space-bro.svg";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <h1>404 : Not Found</h1>
            <h2>You're lost, but don't worry </h2>
            <Link className="btn btn-primary" to="/moonConf">
              Get Safe
            </Link>
          </div>

          <div className="Home__col d-none d-md-block col-md-7">
            <div className="Home__img">
              <img src={NotFoundImage} alt="Astronauts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
