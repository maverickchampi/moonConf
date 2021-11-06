import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import logo from "../images/eclipse.svg";
import astronautsImage from "../images/Astronaut-bro.svg";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <div className="row center">
          <div className="Home__col col-12 col-md-4">
            <img
              src={logo}
              alt="Logo moonConf"
              className="img-fluid mb-2 w-60"
            />

            <h1>Speaker Management System</h1>
            <Link className="btn btn-primary" to="/moonConf/speakers">
              Start
            </Link>
          </div>

          <div className="Home__col d-none d-md-block col-md-7">
            <div className="Home__img">
              <img src={astronautsImage} alt="Astronauts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
