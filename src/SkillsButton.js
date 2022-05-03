import React, { useState } from "react";

const SkillsButton = ({ value, index, clickFunction }) => {
  const [skillsClicked, setSkillsClicked] = useState(false);
  function handleSkillsClicked(e) {
    clickFunction(e)
  }

  return (
    <button
      value={value}
      className={`${skillsClicked ? "skills-clicked" : ""} skills-btn`}
      key={index}
      onMouseEnter={() => setSkillsClicked(true)}
      onMouseLeave={() => setSkillsClicked(false)}
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