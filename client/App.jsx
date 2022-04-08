import * as React from "react";
import MyJobs from "./pages/MyJobs";
import CohortView from "./pages/CohortView";
import Metrics from "./pages/Metrics";
import Home from "./pages/Home";
// import initialData from './initialData';
import { Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import Login from "./container/LoginContainer";
import Signup from "./container/SignUpContainer";
import "./index.css";
import JobsContainer from "./container/JobsContainer";
import AddJobForm from "./components/AddJobForm";
import { createUserThunk, loginUserThunk } from "./redux/userReducer";

class App extends React.Component {
  onUserCreation = (userData) => {
    this.props.createUserThunk(userData);
  };

  onUserLogin = (userData) => {
    this.props.loginUserThunk(userData);
  };

  render() {
    if (!this.props.logged) {
      return (
        <Routes>
          <Route path="/" element={<Login onUserLogin={this.onUserLogin} />} />
          <Route
            path="/signup"
            element={<Signup onUserCreation={this.onUserCreation} />}
          />
        </Routes>
      );
    }

    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<JobsContainer />} />
          <Route path="/MyJobs" element={<MyJobs />} />
          <Route path="/Metrics" element={<Metrics />} />
          <Route path="/CohortView" element={<CohortView />} />
          {/* <Route path="/form" element={<AddJobForm />} /> */}
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logged: state.user.logged,
});

export default connect(mapStateToProps, { createUserThunk, loginUserThunk })(
  App
);

