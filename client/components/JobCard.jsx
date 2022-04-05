import React from "react";

const JobCard = (props) =>{
  const {jobdescription,salaryrange, company, location, jobstatus} = props.info;
  const checkClick = ()=>{
    props.onCardClickHandler(props.info);
  }
  return(
    <div style={{margin: "6px"}} onClick={checkClick}>
      <h3>{jobdescription}</h3>
      <p>{salaryrange}</p>
      <p>{company}</p>
      <p>{location}</p>
      <p>{jobstatus}</p>
    </div>
  )
};

export default JobCard;