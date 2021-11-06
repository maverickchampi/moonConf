import React from "react";
import { Link } from "react-router-dom";

function BadgeForm({ handleInput, onSubmit, form, link }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={handleInput}
            className="form-control"
            type="text"
            name="firstName"
            placeholder="Ingrese nombre"
            value={form.firstName}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            onChange={handleInput}
            className="form-control"
            type="text"
            name="lastName"
            placeholder="Ingrese apellido"
            value={form.lastName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            onChange={handleInput}
            className="form-control"
            type="email"
            name="email"
            placeholder="Ingrese email"
            value={form.email}
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            onChange={handleInput}
            className="form-control"
            type="text"
            name="jobTitle"
            placeholder="Ingrese profesión"
            value={form.jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            onChange={handleInput}
            className="form-control"
            type="text"
            name="twitter"
            placeholder="Ingrese twitter"
            value={form.twitter}
          />
        </div>
        <button className="btn btn-success mt-3 mr-3">Save</button>
        <Link to={link} className="btn btn-warning mt-3">
          Back
        </Link>
      </form>
    </div>
  );
}

export default BadgeForm;
