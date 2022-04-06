import axios from "axios";

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const loginUserAction = (data) => ({ type: LOGIN_USER, data: data });
export const logoutUserAction = () => ({ type: LOGOUT_USER });

export const loginUserThunk = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post("/login", { email, password })
      .then((result) => {
        dispatch(loginUserAction(result));
      })
      .catch((err) => console.log(err));
  };
};

export const createUserThunk = (data) => {
  return (dispatch) => {
    console.log("In thunk ", data);
    axios
      .post("/test", data)
      .then((result) => {
        console.log("REsult from db", result);
        dispatch(loginUserAction(result));
      })
      .catch((err) => console.log(err));
  };
};

// export const logoutUserThunk = () => {
//   return (dispatch) => {
//     axios
//       .post("/login", { email, password })
//       .then((result) => {
//         dispatch(loginUserAction(result));
//       })
//       .catch((err) => console.log(err));
//   };
// };

const initialState = {
  id: 0,
  fullName: "",
  password: "",
  email: "",
  cohortName: "",
  logged: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        id: action.data.id,
        fullName: action.data.fullName,
        password: action.data.password,
        email: action.data.email,
        cohortName: action.data.cohortName,
        logged: true,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        id: 0,
        fullName: "",
        password: "",
        email: "",
        cohortName: "",
        logged: false,
      };
    }
    default:
      return state;
  }
};
