import React, { useState } from "react";

const SkillsButton = ({ value, index, setFilteredValue, filteredValue }) => {
  const [skillsClicked, setSkillsClicked] = useState(false);
  function handleSkillsClicked(e) {
    setSkillsClicked(!skillsClicked);
    setFilteredValue(() => {
      // console.log(typeof filteredValue);
      return typeof filteredValue === 'string' ? e.target.value : filteredValue.concat(e.target.value)
    });
  }
  console.log(filteredValue)
  return (
    <button
      value={value}
      className={`${skillsClicked ? "skills-clicked" : ""} skills-btn`}
      key={index}
      onClick={(e) => {
        handleSkillsClicked(e);
        e.stopPropagation();
      }}
    >
      {value}
    </button>
  );
};

export default SkillsButton;