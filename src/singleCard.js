import React, { useState } from "react";
import SkillsButton from "./SkillsButton";
import JobTitle from "./JobTitle";

const SingleCard = ({
  job,
  setFilteredRole,
  filteredRole,
  setFilteredLevel,
  filteredLevel,
  setFilteredLanguage,
  filteredLanguage,
  filterBy,
  setFilterBy,
}) => {
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
        <SkillsButton
          value={job.level}
          index={job.level}
          clickFunction={(e) => {
            if (!filterBy.includes(e.target.value)) {
              setFilterBy(filterBy.concat(e.target.value));
            }
            if (!filteredLevel.includes(e.target.value)) {
              setFilteredLevel(() => {
                return filteredLevel.concat(e.target.value);
              });
            }
          }}
        />
        <SkillsButton
          value={job.role}
          index={job.role}
          clickFunction={(e) => {
            if (!filterBy.includes(e.target.value)) {
              setFilterBy(filterBy.concat(e.target.value));
            }
            if (!filteredRole.includes(e.target.value)) {
              setFilteredRole(() => {
                return filteredRole.concat(e.target.value);
              });
            }
          }}
        />
        {job.languages.map((language, index) => (
          <SkillsButton
            value={language}
            index={index}
            clickFunction={(e) => {
              if (!filterBy.includes(e.target.value)) {
                setFilterBy(filterBy.concat(e.target.value));
              }
              if (!filteredLanguage.includes(e.target.value)) {
                setFilteredLanguage(() => {
                  return filteredLanguage.concat(e.target.value);
                });
              }
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default SingleCard;
