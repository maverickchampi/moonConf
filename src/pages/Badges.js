import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";
import { getSpeakers } from "../services/index";

import ConfLogo from "../images/astronauta.svg";
import "./styles/Badges.css";

function Badges() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadSpeakers = async() => {
    window.scrollTo(0, 0);
    const response = await getSpeakers();

    if (response.status === 200) {
      setData(response.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSpeakers();
  }, []);

  if (loading) {
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={ConfLogo}
                alt="Conferencia"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/moonConf/speakers/new" className="btn btn-primary">
              New Speaker
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <div className="BadgesList">
              <ul className="list-unstyled list-grid">
                {Array.from(new Array(10)).map((x, i) => {
                  return (
                    <li key={i}>
                      <div className="BadgesListItem">
                        <div className="Badge__content-avatar">
                          <div className="BadgesListItem__avatar"></div>
                        </div>

                        <div>
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={ConfLogo}
                alt="Conferencia"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/moonConf/speakers/new" className="btn btn-primary">
              New Speaker
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={data} />
          </div>
        </div>
      </>
    );
  }
}

export default Badges;
