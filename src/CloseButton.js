import React, { useState } from "react";
import close from "./images/x_icon.png";

const CloseButton = ({
  filterBy,
  setFilterBy,
  setFilteredRole,
  filteredRole,
  setFilteredLevel,
  filteredLevel,
  setFilteredLanguage,
  filteredLanguage,
  filterValue,
}) => {
  const [closed, setClosed] = useState(false);
  return (
    <img
      className={`${closed ? "closed" : ""} close`}
      onMouseEnter={() => setClosed(true)}
      onMouseLeave={() => setClosed(false)}
      alt={filterValue}
      src={close}
      value={filterValue}
      onClick={(e) => {
        console.log(e.target.alt);
        setFilterBy(filterBy.filter((filteredValue) => filteredValue !== e.target.alt));
        if (filteredRole.includes(e.target.alt)) {
          setFilteredRole(filteredRole.filter((filteredValue) => filteredValue !== e.target.alt));
        }
        if (filteredLevel.includes(e.target.alt)) {
          setFilteredLevel(filteredLevel.filter((filteredValue) => filteredValue !== e.target.alt));
        }
        if (filteredLanguage.includes(e.target.alt)) {
          setFilteredLanguage(filteredLanguage.filter((filteredValue) => filteredValue !== e.target.alt));
        }
      }}
    />
  );
};

export default CloseButton