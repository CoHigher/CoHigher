const GET_USER = "GET_USER";

export const getUserAction = (data) => ({ type: GET_USER, data: data });

const initialState = {
  fullName: "",
  password: "",
  email: "",
  cohortName: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        fullName: action.data.fullName,
        password: action.data.password,
        email: action.data.email,
        cohortName: action.data.cohortName,
      };
    }
    default:
      return state;
  }
};
