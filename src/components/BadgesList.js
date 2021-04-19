import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

import "./styles/BadgesList.css";

function BadgesListItem({ badge }) {
  return (
    <div className="BadgesListItem">
      <Gravatar
        className="BadgesListItem__avatar"
        email={badge.email}
        alt={`${badge.firstName} ${badge.lastName}`}
      />
      <div>
        <strong>
          {badge.firstName} {badge.lastName}
        </strong>
        <br />@{badge.twitter}
        <br />
        {badge.jobTitle}
      </div>
    </div>
  );
}

/*Custom hook*/
function useSearchBadges(badges) {
  const [filter, setFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useMemo(() => {
    const result = badges
      .slice(0)
      .reverse()
      .filter((badge) => {
        return `${badge.firstName} ${badge.lastName} ${badge.twitter} ${badge.jobTitle}`
          .toLowerCase()
          .includes(filter.toLowerCase());
      });

    setFilteredResults(result);
  }, [badges, filter]);

  return { filter, setFilter, filteredResults };
}

function BadgesList({ badges }) {
  const { filter, setFilter, filteredResults } = useSearchBadges(badges);

  return (
    <div className="BadgesList">
      <div className="form-group filter">
        <label>Filter Speakers</label>
        <input
          type="text"
          className="form-control"
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
                  to={`/badges/${badge.id}`}
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
