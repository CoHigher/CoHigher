import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const { jobdescription, salaryrange, company, location, jobstatus } =
    props.info;
  const checkClick = () => {
    const state = { page_id: 1, user_id: 5 };

    history.pushState(state, "", "form");
    props.onCardClickHandler(props.info);
  };
  return (
    <a
      href="/form"
      onClick={(e) => {
        e.preventDefault();
        checkClick();
      }}
    >
      <div style={{ margin: "6px" }}>
        <h3>{jobdescription}</h3>
        <p>{salaryrange}</p>
        <p>{company}</p>
        <p>{location}</p>
        <p>{jobstatus}</p>
      </div>
    </a>
  );
};

export default JobCard;
