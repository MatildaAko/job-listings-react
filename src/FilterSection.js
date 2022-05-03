import React, { useState } from "react";
// import JobList from "./data.json";
import SkillsButton from "./SkillsButton";

import CloseButton from "./CloseButton";

const FilterSection = ({
  filterBy,
  setFilterBy,
  setFilteredRole,
  filteredRole,
  setFilteredLevel,
  filteredLevel,
  setFilteredLanguage,
  filteredLanguage,
}) => {
  
  return (
    <div className="filter-section">
      {filterBy &&
        filterBy.map((filterValue) => {
          return (
            <span className="filter-span" value={filterValue}>
              <SkillsButton value={filterValue} index={filterValue} clickFunction={(e) => console.log(e.target.value)} />
              <CloseButton
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                setFilteredRole={setFilteredRole}
                filteredRole={filteredRole}
                setFilteredLevel={setFilteredLevel}
                filteredLevel={filteredLevel}
                setFilteredLanguage={setFilteredLanguage}
                filteredLanguage={filteredLanguage}
                filterValue={filterValue}
              />
            </span>
          );
        })}
    </div>
  );
};

export default FilterSection;
