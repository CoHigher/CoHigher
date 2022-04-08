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
    <div className="Job_Card">
      <a
        href="/form"
        onClick={(e) => {
          e.preventDefault();
          checkClick();
        }}
      >
        <div className="Job-Text">
          <h3 className="Job_Title">{jobdescription}</h3>
          <p className="Job_Title">{company} ({salaryrange})</p>
        </div>
      </a>
      <div className="button_container">
      <button className="Delete_Button"onClick={onDelete} type="button">
        X
      </button>
      </div>
    </div>
  );
};

export default JobCard;
