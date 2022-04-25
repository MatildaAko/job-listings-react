import React from "react";
import jobList from "./data.json"
import SingleCard from "./singleCard";

const AllCards = () => {
  console.log(jobList)
  return jobList.map((job) => {
    return <SingleCard job={job} />
  })
};

export default AllCards;