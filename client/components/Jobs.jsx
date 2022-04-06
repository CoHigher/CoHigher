import React from "react";
import JobCard from "./JobCard";

const Jobs = (props) => {
  const { name, jobs, addClickedHandler, onCardClickHandler } = props;
  const jobsCards = jobs.map((job, i) => {
    return (
      <JobCard
        onDeleteCard={props.onDeleteCard}
        onCardClickHandler={onCardClickHandler}
        key={i}
        info={job}
      />
    );
  });
  return (
    <div className="Jobs_Section">
      <h2>{name}</h2>
      <p>{`${jobs.length} Jobs`}</p>
      <button className="Add_Job_Button" onClick={() => addClickedHandler(name)} type="button">
        +
      </button>
      {jobsCards}
    </div>
  );
};

export default Jobs;
