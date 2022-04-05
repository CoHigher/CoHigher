import React from "react";

const JobCard = (props) =>{
  const {jobDescription,salary, companyName, location, status} = props.info;
  return(
    <div style={{margin: "6px"}}>
      <h3>{jobDescription}</h3>
      <p>{salary}</p>
      <p>{companyName}</p>
      <p>{location}</p>
      <p>{status}</p>
    </div>
  )
};

export default JobCard;