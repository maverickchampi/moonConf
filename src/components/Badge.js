import React from "react";

import Gravatar from "./Gravatar";

import logo from "../images/astronauta.svg";
import "./styles/Badge.css";

function Badge({ firstName, lastName, jobTitle, twitter, email }) {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={logo} alt="Logo de la conferencia" />
      </div>

      <div className="Badge__section-name">
        <Gravatar email={email} alt="Avatar" />
        <h1>
          {firstName}
          <br /> {lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <p>{jobTitle}</p>
        <p>@{twitter}</p>
      </div>

      <div className="Badge__footer">#moonConf</div>
    </div>
  );
}

export default Badge;
