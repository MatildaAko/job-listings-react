import React, { useState } from "react";

const JobTitle = ({ job }) => {
  const [titleClicked, setTitleClicked] = useState(false)
  
  return (
    <p
      className={`${titleClicked ? "title-clicked" : ""} title`}
      key={job.position}
      onMouseEnter={() => setTitleClicked(true)}
      onMouseLeave={() => setTitleClicked(false)}
      onClick={e => e.stopPropagation()}
    >
      {job.position}
    </p>
  );
}

export default JobTitle;