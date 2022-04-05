import React, {useState} from "react";

const AddJobForm = (props) =>{
  const [jobDescription, setJobDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const onBtnSubmit = ()=>{
    console.log('jobDescription', jobDescription)
    console.log('salary' , salary)
    console.log('companyName', companyName)
    console.log('location', location)
    console.log('status',status)
  }

  return(
    <div>
     <lable for='jobDescription'>Job Description</lable>
     <input id="jobDescription" onChange={setJobDescription(e.target.value)} />
     <lable for='salary'>Salary</lable>
     <input id="salary" onChange={setSalary(e.target.value)} />
     <lable for='companyName'>Company Name</lable>
     <input id="companyName" onChange={setCompanyName(e.target.value)} />
     <lable for='location'>Location</lable>
     <input id="location" onChange={setLocation(e.target.value)} />
     <lable for='status'>Status</lable>
     <input id="status" onChange={setStatus(e.target.value)} />
     <button onClick={onBtnSubmit} type='button'>Submit</button>
    </div>
  )
};

export default AddJobForm;