import React, { useEffect, useState } from "react";
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
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
    avatarUrl: "",
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
      const response = await saveSpeaker(form);
      setLoading(false);

      if (response.status === 201) {
        Swal.fire({
          title: "Success",
          text: `Speaker successfully created`,
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
                firstName={form.firstName || "FIRST NAME"}
                lastName={form.lastName || "LAST NAME"}
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
                link={"/moonConf/speakers"}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
