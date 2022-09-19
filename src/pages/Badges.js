import React, { useState, useLayoutEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";
import { getSpeakers } from "../services/index";

import ConfLogo from "../images/astronauta.svg";
import "./styles/Badges.css";

function Badges() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPDF, setLoadingPDF] = useState(false);

  const loadSpeakers = async() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const response = await getSpeakers();

    if (response.status === 200) {
      setData(response.data);
      setLoading(false);
    }
  }

  const downloadPDF = async() => {
    console.log("Descargando PDF");	
    if(loadingPDF) return;
    setLoadingPDF(true);
    console.log("Descargar PDF");
    await new Promise(() => setTimeout(() => {
      setLoadingPDF(false);
    }, 2000));
  }

  useLayoutEffect(() => {
    loadSpeakers();
  }, []);

 
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

      {!loading &&
        <div className="Badge__container">
          <div className="Badges__buttons">
            <button onClick={downloadPDF} className="btn btn-danger me-1">
              {loadingPDF
                ? "Cargando..."
                : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
              }
            </button>

            <Link to="/moonConf/speakers/new" className="btn btn-success me-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </Link>
          </div>
        </div>
      }

      {loading
        ? <div className="Badges__list">
            <div className="Badges__container">
              <div className="BadgesList">
                <ul className="list-unstyled list-grid">
                  {Array.from(new Array(9)).map((x, i) => {
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
        : <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={data} />
            </div>
          </div>
      }
    </>
  );
}

export default Badges;
