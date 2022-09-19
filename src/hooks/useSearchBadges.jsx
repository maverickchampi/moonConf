import { useMemo, useState } from "react";

const useSearchBadges = ({
  badges,
}) => {
  const [filter, setFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useMemo(() => {
    if(!badges) return;

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

export default useSearchBadges