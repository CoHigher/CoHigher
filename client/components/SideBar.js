import React, { useState } from 'react';
import CheckBoxes from './CheckBoxes';
import FilterData from './FilterData';

// TODO
// update to bring in real data array
// update so each checkbox has own individual state - separate component?

const SideBar = () => {
  const [role, setRole] = useState(FilterData);

  const roles = [...new Set(FilterData.map((val) => val.jobdescription))];
  // const [checked, setChecked] = useState(false);
  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  const filterRole = (currRole) => {
    const newRole = FilterData.filter((newVal) => {
      return newVal.role === currRole;
    });
    console.log(`role selected ${newRole}`);
    setRole(newRole);
  };

  return (
      <div className="container-fluid">
        <div className="row">
          <h2>Profile Filters</h2>
          <CheckBoxes filterRole={filterRole} setRole={setRole} roles={roles} />
        </div>
      </div>
  );
};

export default SideBar;

// sample data to work with
// const filterData = [
//   // {
//   // role: [
//   { id: 1, role: 'Frontend Developer' },
//   { id: 2, role: 'Backend Developer' },
//   { id: 3, role: 'Fullstack Developer' },
//   { id: 4, role: 'Android Developer' },
//   { id: 5, role: 'iOS Developer' },
//   // ],
//   // location: [
//   //   { id: 1, location: 'NYC' },
//   //   { id: 2, location: 'Los Angeles' },
//   //   { id: 3, location: 'Seattle' },
//   //   { id: 4, location: 'Remote' },
//   // ],
//   // },
// ];
