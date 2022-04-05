import React, { useState } from 'react';

// const filterItem = () => {

// }

const SideBar = () => {
  <div className="stack-small">
    <div className="c-cb">
      <input
        // id={props.id}
        id="1"
        type="checkbox"
        // defaultChecked={props.completed}
        defaultChecked="false"
        // onChange={() => props.toggleTaskCompleted(props.id)}
        onClick={() => toggle()}
      />
      {/* <label className="todo-label" htmlFor={props.id}>
        {props.name}
      </label> */}
      <label className="jobType" htmlFor="Full Stack Engineer"></label>
    </div>
  </div>;
};

export default SideBar;
