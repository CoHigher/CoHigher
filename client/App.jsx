import React  from "react";
import JobsContainer from "./container/JobsContainer";
import photo from './assets/img-academy-oqxuxY.jpeg';

const App = (props) => {
  props.store
  return <div>
    <img src={photo}/>
  </div>;
};

export default App;