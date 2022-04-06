import React, { useEffect, useState } from "react";

const AddJobForm = (props) => {
  const [jobdescription, setjobdescription] = useState("");
  const [salaryrange, setsalaryrange] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobstatus, setjobstatus] = useState("");
  const onBtnSubmit = () => {
    const newData = {
      company: "Apple3",
      userId: 3,
      location: "Angeles",
      jobdescription: "Senior Software Engineer",
      salaryrange: "200,000-300,000",
      jobstatus: "phone interview",
      interviewdate: "2022-05-15",
      hiredstatus: false,
    };
    const data = { jobdescription, salaryrange, company, location, jobstatus };
    data.userId = 1;
    props.onSubmitJobHandler(newData);
  };

  useEffect(() => {
    setjobdescription(props.info.jobdescription || "");
    setsalaryrange(props.info.salaryrange || "");
    setCompany(props.info.company || "");
    setLocation(props.info.location || "");
    setjobstatus(props.info.jobstatus || "");
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
      <button onClick={onBtnSubmit} type="button">
        Submit
      </button>
    </div>
  );
};

export default AddJobForm;
