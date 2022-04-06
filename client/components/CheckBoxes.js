import React, { useState } from 'react';
import SideBar from './SideBar';
import FilterData from './FilterData';

const CheckBoxes = ({ role, roles, setRole, filterRole }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {roles.map((val, id) => {
          return (
            <label key={id}>
              <input type="checkbox" value={val} onClick={filterRole} />

              {val}
            </label>
          );
        })}
        <label>
          <input type="checkbox" onClick={() => setRole(filterData)} />
          All
        </label>
      </div>
    </>
  );
};

export default CheckBoxes;
