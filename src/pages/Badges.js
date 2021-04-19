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

  useEffect(() => {
    async function loadSpeakers() {
      const response = await getSpeakers();

      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      }
    }
    loadSpeakers();
  }, []);

  if (loading) {
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            <Link to="/badges/new" className="btn btn-primary">
              New Speaker
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <div className="BadgesList">
              <ul className="list-unstyled list-grid">
                {skeleton.map((i) => {
                  return (
                    <li key={i}>
                      <div className="BadgesListItem">
                        <img
                          className="BadgesListItem__avatar"
                          src={Skeleton}
                          alt={Skeleton}
                        />

                        <div style={{ width: "80%" }}>
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
            <Link to="/badges/new" className="btn btn-primary">
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
