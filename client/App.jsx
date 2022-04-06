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

// const App = () => {

//   return (

//     // <div className="App">
//     // <h1>Working App H1</h1>
//     // </div>
//     <div className="App">
//       <header>
//         <h1>CoHigher - app initial render</h1>
//       </header>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/MyJobs" element={<MyJobs />} />
//         <Route path="/Metrics" element={<Metrics />} />
//         <Route path="/CohortView" element={<CohortView />} />
//       </Routes>
//     </div>

//   );
// };

class App extends React.Component {
  render() {
    // if(!this.props.logged){
    //   return(
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/signup" element={<Signup />} />
    //     </Routes>)
    // }

    return (
      // <div className="App">
      // <h1>Working App H1</h1>
      // </div>
      <div className="App">
        <header>
          <h1>CoHigher - app initial render</h1>
        </header>
        <NavBar />
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

export default connect(mapStateToProps)(App);
