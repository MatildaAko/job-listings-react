import React from "react";
import jobList from "./data.json";
import SingleCard from "./SingleCard";

const AllCards = ({
  filteredRole,
  setFilteredRole,
  filteredLevel,
  setFilteredLevel,
  filteredLanguage,
  setFilteredLanguage,
  filterBy,
  setFilterBy
}) => {
  return jobList
    .filter((job) => {
      return filteredRole === "" ? job : job.role.includes(filteredRole);
    })
    .filter((job) => {
      return filteredLevel === "" ? job : job.level.includes(filteredLevel);
    })
    .filter((job) => {
      return filteredLanguage.length === 0
        ? job
        : job.languages.find((language) => {
            return filteredLanguage.includes(language);
          });
    })
    .map((job) => {
      return (
        <SingleCard
          job={job}
          filteredRole={filteredRole}
          setFilteredRole={setFilteredRole}
          filteredLevel={filteredLevel}
          setFilteredLevel={setFilteredLevel}
          filteredLanguage={filteredLanguage}
          setFilteredLanguage={setFilteredLanguage}
          // filteredValue={filteredValue}
          // setFilteredValue={setFilteredValue}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      );
    });
};

export default AllCards;