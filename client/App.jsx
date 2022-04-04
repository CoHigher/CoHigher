import React  from "react";
import JobsContainer from "./container/JobsContainer";
import Login from "./container/LoginContainer"
import photo from './assets/img-academy-oqxuxY.jpeg';

const App = (props) => {
  props.store
  return <div>
    <Login />
  </div>;
};

export default App;