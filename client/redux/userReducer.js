import axios from "axios";

const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const loginUserAction = (data) => ({ type: LOGIN_USER, data: data });
export const logoutUserAction = () => ({ type: LOGOUT_USER });

export const loginUserThunk = ({ email, password }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        dispatch(loginUserAction(result.data[0]));
      })
      .catch((err) => console.log(err));
  };
};

export const createUserThunk = (data) => {
  return (dispatch) => {
    console.log("In createUser thunk ", data);
    axios
      .post("http://localhost:3000/signup", data)
      .then((result) => {
        console.log("REsult from db", result);
        dispatch(loginUserAction(result.data[0]));
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
  userid: 0,
  fullname: "",
  password: "",
  email: "",
  cohortid: 0,
  logged: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        userid: action.data.userid,
        fullname: action.data.fullname,
        password: action.data.password,
        email: action.data.email,
        cohortid: action.data.cohortid,
        logged: true,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        userid: 0,
        fullname: "",
        password: "",
        email: "",
        cohortid: 0,
        logged: false,
      };
    }
    default:
      return state;
  }
};
