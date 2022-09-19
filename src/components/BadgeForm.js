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
        <button className="btn btn-success mt-3 me-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
          </svg>
        </button>

        <Link to={link} className="btn btn-warning mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
          </svg>
        </Link>
      </form>
    </div>
  );
}

export default BadgeForm;
