import React from "react";
import JobCard from "./JobCard";

const Jobs = (props) =>{
  const {name, jobs , addClickedHandler} = props;
  const jobsCards = jobs.map((job,i)=>{
    return <JobCard key={i} info = {job} />;
  });
  return(
    <div>
      <h2>{name}</h2>
      <p>{`${jobs.length} Jobs`}</p>
      <button onClick={()=>addClickedHandler(name)} type="button">+</button>
      <div style={{display:"flex"}}>
        {jobsCards}
      </div>
    </div>
  )
};

export default Jobs;