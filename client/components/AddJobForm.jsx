import React, { useEffect, useState } from "react";

const AddJobForm = (props) => {
  const [jobdescription, setjobdescription] = useState("");
  const [salaryrange, setsalaryrange] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobstatus, setjobstatus] = useState("");
  const [interviewdate, setinterviewdate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const onBtnSubmit = () => {
    const data = {
      jobdescription,
      salaryrange,
      company,
      location,
      jobstatus,
      userId: props.userId,
      interviewdate,
    };
    props.onSubmitJobHandler(data);
  };

  useEffect(() => {
    setjobdescription(props.info.jobdescription || "");
    setsalaryrange(props.info.salaryrange || "");
    setCompany(props.info.company || "");
    setLocation(props.info.location || "");
    setjobstatus(props.info.jobstatus || "");
    setinterviewdate(
      props.info.interviewdate?.slice(0, 10) ||
        new Date().toISOString().slice(0, 10)
    );
  }, []);

  return (
    <div>
      <label htmlFor="jobdescription">Job Description</label>
      <input
        id="jobdescription"
        onChange={(e) => setjobdescription(e.target.value)}
        value={jobdescription}
      />
      <label htmlFor="salaryrange">salaryrange</label>
      <input
        id="salaryrange"
        onChange={(e) => setsalaryrange(e.target.value)}
        value={salaryrange}
      />
      <label htmlFor="company">Company Name</label>
      <input
        id="company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <label htmlFor="jobstatus">jobstatus</label>
      <input
        id="jobstatus"
        onChange={(e) => setjobstatus(e.target.value)}
        value={jobstatus}
      />
      <label htmlFor="interviewdate">interviewdate</label>
      <input
        id="interviewdate"
        type="date"
        onChange={(e) => setinterviewdate(e.target.value)}
        value={interviewdate}
      />
      <button onClick={onBtnSubmit} type="button">
        Submit
      </button>
    </div>
  );
};

export default AddJobForm;
