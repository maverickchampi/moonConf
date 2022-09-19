import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router";
import Swal from "sweetalert2";

import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import { getSpeaker, deleteSpeaker } from "../services/index";

import ConfLogo from "../images/astronauta.svg";
import "./styles/BadgeDetails.css";

function BadgeDetails() {
  let history = useHistory();
  const { badgeId } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const response = await deleteSpeaker(data.id);
      setLoading(false);
      if (response.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: `Speaker has been deleted`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Opps!",
          text: `Speaker could not be removed`,
          icon: "error",
        });
      }
      history.push("/moonConf/speakers");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    async function data() {
      try {
        const response = await getSpeaker(badgeId);
        if (response.status === 200) {
          setData(response.data);
          setLoading(false);
        } else {
          console.log(response);
          Swal.fire({
            title: "Opps!",
            text: `Speaker not found`,
            icon: "error",
          });
          history.push("/moonConf/speakers");
        }
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, []);

  if (loading) {
    return (
      <>
        <PageLoading />
      </>
    );
  } else {
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="content">
            <img
              className="BadgesDetails_conf-logo"
              src={ConfLogo}
              alt="Conferencia"
            />
            <div className="BadgeDetails__hero-attendant-name">
              <h1>
                {data.firstName} {data.lastName}
              </h1>
            </div>
          </div>
        </div>

        <div className="container-main">
          <div className="content__badge">
            <div className="content__info">
              <Badge
                firstName={data.firstName}
                lastName={data.lastName}
                email={data.email}
                jobTitle={data.jobTitle}
                twitter={data.twitter}
              />
            </div>
            <div className="main-row">
              <div className="group-buttons">
                <Link
                  className="btn btn-info mb-1"
                  to={`/moonConf/speakers/${data.id}/edit`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                  </svg>
                </Link>
  
                <button
                  onClick={() =>
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleDelete();
                      }
                    })
                  }
                  className="btn btn-danger mb-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                  </svg>
                </button>

                <Link
                  to={"/moonConf/speakers"}
                  className="btn btn-warning mb-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
                    <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
