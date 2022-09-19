import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";
import useSearchBadges from "../hooks/useSearchBadges";

import "./styles/BadgesList.css";

function BadgesListItem({ badge }) {
  return (
    <div className="BadgesListItem">
      <div className="Badge__content-avatar">
        <Gravatar
          className="BadgesListItem__avatar"
          email={badge.email}
          alt={`${badge.firstName} ${badge.lastName}`}
        />
      </div>
      <p>
        <strong>
          {badge.firstName} {badge.lastName}
        </strong>
        <br />@{badge.twitter}
        <br />
        {badge.jobTitle}
      </p>
    </div>
  );
}

function BadgesList({
  badges
}) {
  const { filter, setFilter, filteredResults } = useSearchBadges({ badges });

  return (
    <div className="BadgesList">
      <div className="form-group filter">
        <label className="mb-1">Filter Speakers</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a word to filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled list-grid">
        {filteredResults.length !== 0 ? (
          filteredResults.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/moonConf/speakers/${badge.id}`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })
        ) : (
          <h3>No badges were found</h3>
        )}
      </ul>
    </div>
  );
}

export default BadgesList;
