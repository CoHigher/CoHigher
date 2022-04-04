const ADD_JOB = "ADD_JOB";
const UPDATE_JOB = "UPDATE_JOB";
const DELETE_JOB = "DELETE_JOB";

export const addJobAction = (data) => ({ type: ADD_JOB, data: data });
export const updateJobAction = (data) => ({ type: UPDATE_JOB, data: data });
export const deleteJobAction = (data) => ({ type: DELETE_JOB, data: data });

const initialState = {
  jobDescription: "",
  companyName: "",
  salary: "",
  location: "",
  jobStatus: "",
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB: {
      return {
        ...state,
        jobDescription: action.data.jobDescription,
        companyName: action.data.companyName,
        salary: action.data.salary,
        location: action.data.location,
        jobStatus: action.data.jobStatus,
      };
    }
    case UPDATE_JOB: {
      return {
        ...state,
        jobDescription: action.data.jobDescription,
        companyName: action.data.companyName,
        salary: action.data.salary,
        location: action.data.location,
        jobStatus: action.data.jobStatus,
      };
    }
    case DELETE_JOB: {
      return {
        ...state,
        jobDescription: "",
        companyName: "",
        salary: "",
        location: "",
        jobStatus: "",
      };
    }
    default:
      return state;
  }
};
