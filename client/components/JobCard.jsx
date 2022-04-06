import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  console.log(`Here is props for card ${props.info.id} `, props);
  const { jobdescription, salaryrange, company, location, jobstatus } =
    props.info;
  const checkClick = () => {
    const state = { page_id: 1, user_id: 5 };
    const data = Object.assign({}, { cardClicked: true }, props.info);
    history.pushState(state, "", "form");
    props.onCardClickHandler(data);
  };
  const onDelete = () => {
    props.onDeleteCard(props.info.id);
  };
  return (
    <div>
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
      <button onClick={onDelete} type="button">
        Delete Card
      </button>
    </div>
  );
};

export default JobCard;
