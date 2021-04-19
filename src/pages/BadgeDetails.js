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
      history.push("/badges");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
          history.push("/badges");
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
          <div className="main-row">
            <div className="main-column">
              <Badge
                firstName={data.firstName}
                lastName={data.lastName}
                email={data.email}
                jobTitle={data.jobTitle}
                twitter={data.twitter}
              />
            </div>
            <div className="main-column">
              <div className="group-buttons">
                <div>
                  <Link
                    className="btn btn-primary mb-2"
                    to={`/badges/${data.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
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
                    className="btn btn-danger mb-2"
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <Link to={"/badges"} className="btn btn-warning">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
