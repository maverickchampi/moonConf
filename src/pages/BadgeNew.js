import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import { saveSpeaker } from "../services/index";

import header from "../images/eclipse.svg";
import "./styles/BadgeNew.css";

function BadgeNew() {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [form, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await saveSpeaker(form);
      setLoading(false);
      if (response.status === 201) {
        Swal.fire({
          title: "Success",
          text: `Speaker successfully created`,
          icon: "success",
        });
        history.push("/badges");
      } else {
        Swal.fire({
          title: "Opps!",
          text: `Server error, try again`,
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <>
        <PageLoading />
      </>
    );
  } else {
    return (
      <>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container-main">
          <div className="main-row">
            <div className="main-column">
              <Badge
                firstname={form.firstName || "FIRST NAME"}
                lastname={form.lastName || "LAST NAME"}
                email={form.email || "EMAIL"}
                jobTitle={form.jobTitle || "JOB TITLE"}
                twitter={form.twitter || "TWITTER"}
              />
            </div>

            <div className="main-column">
              <h1>New Speaker</h1>
              <BadgeForm
                handleInput={handleInput}
                onSubmit={handleSubmit}
                form={form}
                link={"/badges"}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
