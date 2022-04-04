import axios from "axios";

const GET_JOBS = "GET_JOBS";
const ADD_JOB = "ADD_JOB";
const UPDATE_JOB = "UPDATE_JOB";
const DELETE_JOB = "DELETE_JOB";

export const getJobsAction = (jobs) => ({ type: GET_JOBS, jobs });
export const addJobAction = (data) => ({ type: ADD_JOB, data: data });
export const updateJobAction = (data) => ({ type: UPDATE_JOB, data: data });
export const deleteJobAction = (data) => ({ type: DELETE_JOB, data: data });

export const getJobsThunk = (userId) => {
  return (dispatch) => {
    axios
      .post(`/getJobs/${userId}`)
      .then((jobs) => {
        dispatch(getJobsAction(jobs));
      })
      .catch((err) => console.log(err));
  };
};

export const addJobThunk = (userId) => {
  return (dispatch) => {
    axios
      .post(`/addJob/${userId}`, data)
      .then((result) => {
        dispatch(addJobAction(result));
      })
      .catch((err) => console.log(err));
  };
};

export const updateJobThunk = (jobId) => {
  return (dispatch) => {
    axios
      .post(`/updateJob/${jobId}`, data)
      .then((result) => {
        dispatch(updateJobAction(result));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteJobThunk = (jobId) => {
  return (dispatch) => {
    axios
      .post(`/deleteJob/${jobId}`)
      .then((result) => {
        dispatch(deleteJobAction(result));
      })
      .catch((err) => console.log(err));
  };
};

const initialState = {
  jobs: [],
  // jobDescription: "",
  // companyName: "",
  // salary: "",
  // location: "",
  // jobStatus: "",
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS: {
      return {
        ...state,
        jobs: [...action.jobs],
      };
    }
    case ADD_JOB: {
      return {
        ...state,
        jobs: [...state.jobs, data],
        // jobDescription: action.data.jobDescription,
        // companyName: action.data.companyName,
        // salary: action.data.salary,
        // location: action.data.location,
        // jobStatus: action.data.jobStatus,
      };
    }
    case UPDATE_JOB: {
      return {
        ...state,
        jobs: state.jobs.map((job) => {
          if (job.id === action.data.id) {
            job.jobDescription = action.data.jobDescription;
            job.companyName = action.data.companyName;
            job.salary = action.data.salary;
            job.location = action.data.location;
            job.jobStatus = action.data.jobStatus;
          }
          return job;
        }),
      };
    }
    case DELETE_JOB: {
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.data.id),
      };
    }
    default:
      return state;
  }
};
