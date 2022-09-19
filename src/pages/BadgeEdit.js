import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import Swal from "sweetalert2";

import { getSpeaker, updateSpeaker } from "../services/index";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import header from "../images/eclipse.svg";
import "./styles/BadgeEdit.css";

function BadgeEdit() {
  let history = useHistory();
  const { badgeId } = useParams();
  const [loading, setLoading] = useState(true);
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

    if(
      form.id === "" ||
      form.firstName === "" ||
      form.lastName === "" ||
      form.email === "" ||
      form.jobTitle === "" ||
      form.twitter === "" ||
      form.avatarUrl === ""
    ){
      Swal.fire({
        title: "Opps!",
        text: `All fields are required`,
        icon: "error",
      });
      return
    }

    try {
      setLoading(true);
      const response = await updateSpeaker(form);
      setLoading(false);

      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: `Speaker successfully updated`,
          icon: "success",
        });
        history.push("/moonConf/speakers");
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

  useEffect(() => {
    window.scrollTo(0, 0);
    async function data() {
      try {
        const response = await getSpeaker(badgeId);
        if (response.status === 200) {
          setValues(response.data);
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
      <>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container-main">
          <div className="main-row">
            <div className="main-column">
              <Badge
                firstName={form.firstName || "FIRST NAME"}
                lastName={form.lastName || "LAST NAME"}
                email={form.email || "EMAIL"}
                jobTitle={form.jobTitle || "JOB TITLE"}
                twitter={form.twitter || "TWITTER"}
              />
            </div>

            <div className="main-column">
              <h1>Edit Speaker</h1>
              <BadgeForm
                handleInput={handleInput}
                onSubmit={handleSubmit}
                form={form}
                link={`/moonConf/speakers/${form.id}`}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeEdit;
