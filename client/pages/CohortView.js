import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';

const CohortView = (props) => {
  return (
    <div>
      <h3>Cohort View</h3>
      <p> how are your fellow mates doing??</p>
      <NavBar />
      <SideBar />
    </div>
  );
};

export default CohortView;
