import React from "react";
import { connect } from 'react-redux';
import {getJobsThunk, addJobThunk, updateJobThunk, deleteJobThunk} from '../redux/jobReducer';

class JobsContainer extends React.Component{



  render(props){
    return (<div>
      some data here
    </div>)
  }
};

const mapStateToProps = (state)=>({
  jobs : state.jobs
});

export default connect(mapStateToProps,{getJobsThunk, addJobThunk, updateJobThunk, deleteJobThunk})(JobsContainer);