import React, { useState } from "react";
import jobList from "./data.json";
import SingleCard from "./singleCard";

const AllCards = () => {
  const [filteredRole, setFilteredRole] = useState("");
  const [filteredLevel, setFilteredLevel] = useState("");
  const [filteredLanguage, setFilteredLanguage] = useState([]);

  return jobList
    .filter((job) => {
      return filteredRole === "" ? job : job.role.includes(filteredRole);
    })
    .filter((job) => {
      return filteredLevel === "" ? job : job.level.includes(filteredLevel);
    })
    .filter((job) => {
      return filteredLanguage.length === 0 ? job : job.languages.find(language => { return filteredLanguage.includes(language);});
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
        />
      );
    });
}

export default AllCards;