import React, { useState } from "react";
import SkillsButton from "./SkillsButton";
import JobTitle from "./JobTitle"

const SingleCard = ({ job }) => {
  const [cardClicked, setCardClicked] = useState(false);
  return (
    <div className={`${cardClicked ? "card-clicked" : ""} jobs-card`} key={job.company} onClick={() => setCardClicked(!cardClicked)}>
      <section className="job-description-section">
        <img src={require(`${job.logo}`)} alt={`${job.company} Logo`} />
        <section className="job-info">
          <section className="company-name">
            <span>{job.company}</span>
            {job.new && <button className="new job-button">NEW!</button>}
            {job.featured && <button className="featured job-button">FEATURED</button>}
          </section>
          <section className="job-title">
            <JobTitle job={job} />
          </section>
          <section className="posted">
            <ul>
              <li>{job.postedAt}</li>
              <li>{job.contract}</li>
              <li>{job.location}</li>
            </ul>
          </section>
        </section>
      </section>
      <section className="skills-section">
        <SkillsButton value={job.level} index={job.level} />
        <SkillsButton value={job.role} index={job.role} />
        {job.languages.map((language, index) => (
          <SkillsButton value={language} index={index} />
        ))}
      </section>
    </div>
  );
};

export default SingleCard;
