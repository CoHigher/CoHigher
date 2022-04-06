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
      .get(`http://localhost:3000/getjobs/${userId}`)
      .then((jobs) => {
        dispatch(getJobsAction(jobs.data));
      })
      .catch((err) => console.log(err));
  };
};

export const addJobThunk = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3000/addjob`, data)
      .then((result) => {
        dispatch(addJobAction(result.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateJobThunk = (data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/updatejob`, data)
      .then((result) => {
        dispatch(updateJobAction(result.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteJobThunk = (jobId) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/deletejob/${jobId}`)
      .then((result) => {
        dispatch(deleteJobAction(result.data));
      })
      .catch((err) => console.log(err));
  };
};

const initialState = {
  jobs: [
    // {
    //   id: 1,
    //   jobdescription: "software engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Microsoft",
    //   location: "NY",
    //   jobstatus: "wishlist",
    // },
    // {
    //   id: 2,
    //   jobdescription: " senior software engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Apple",
    //   location: "NY",
    //   jobstatus: "applied",
    // },
    // {
    //   id: 3,
    //   jobdescription: "front-end engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "IBM",
    //   location: "NY",
    //   jobstatus: "recruitercall",
    // },
    // {
    //   id: 4,
    //   jobdescription: "back-end engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Meta",
    //   location: "NY",
    //   jobstatus: "interview",
    // },
    // {
    //   id: 5,
    //   jobdescription: "engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Bloomsburg",
    //   location: "NY",
    //   jobstatus: "offer",
    // },
    // {
    //   id: 6,
    //   jobdescription: "engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Capital One",
    //   location: "NJ",
    //   jobstatus: "wishlist",
    // },
    // {
    //   id: 7,
    //   jobdescription: "engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Netflix",
    //   location: "NJ",
    //   jobstatus: "applied",
    // },
    // {
    //   id: 8,
    //   jobdescription: "software engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Amazon",
    //   location: "NJ",
    //   jobstatus: "recruitercall",
    // },
    // {
    //   id: 9,
    //   jobdescription: "software engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Sony",
    //   location: "NJ",
    //   jobstatus: "interview",
    // },
    // {
    //   id: 10,
    //   jobdescription: "back-end engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Google",
    //   location: "NJ",
    //   jobstatus: "offer",
    // },
    // {
    //   id: 11,
    //   jobdescription: "front-end engineer",
    //   salaryrange: "135,000-150,000",
    //   company: "Adobe",
    //   location: "TX",
    //   jobstatus: "wishlist",
    // },
  ],
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
        jobs: [...state.jobs, action.data[0]],
      };
    }
    case UPDATE_JOB: {
      return {
        ...state,
        jobs: state.jobs.map((job) => {
          if (job.id === action.data[0].id) job = action.data[0];
          return job;
        }),
      };
    }
    case DELETE_JOB: {
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.data[0].id),
      };
    }
    default:
      return state;
  }
};
