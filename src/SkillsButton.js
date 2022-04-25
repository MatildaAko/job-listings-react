import React from "react";

const SkillsButton = ({ value, index }) => {
  return (
    <button className="skills-btn" key={index} onClick={e => e.stopPropagation()}>
      {value}
    </button>
  );
}

export default SkillsButton;