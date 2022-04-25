import React, { useState } from "react";

const SkillsButton = ({ value, index }) => {
  const [skillsClicked, setSkillsClicked] = useState(false)
  function handleSkillsClicked() {
    setSkillsClicked(!skillsClicked);
  }
  return (
    <button className={`${skillsClicked ? "skills-clicked" : ""} skills-btn`} key={index} onClick={e => { handleSkillsClicked(); e.stopPropagation(); }}>
      {value}
    </button>
  );
}

export default SkillsButton;