import React  from "react";
import JobsContainer from "./container/JobsContainer";

const App = (props) => {
  props.store
  return <div><JobsContainer jobs = {props.store.jobs}/></div>;
};

export default App;