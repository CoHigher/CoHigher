import React from "react";
import { connect } from 'react-redux';
import {getJobsThunk, addJobThunk, updateJobThunk, deleteJobThunk} from '../redux/jobReducer';
import Jobs from "../components/Jobs";

class JobsContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clickedAddButton : false
    }
  }

  componentDidMount(){
    //this.props.getJobsThunk();
  }

  addClickedHandler = () =>{
    console.log('Adding job');
    this.setState({clickedAddButton:true})
  }
  
  onSubmitJobHandler = () =>{
    console.log('Submitting job');
    //this.props.addJobThunk();
    this.setState({clickedAddButton:false})
  }

  render(){
    console.log('Cliecked button: ', this.state.clickedAddButton);
    const wishlist = [];
    const applied = [];
    const recruitercall = [];
    const interview = [];
    const offer = [];

    this.props.jobs.forEach(job=>{
      if(job.status === 'wishlist')wishlist.push(job);
      if(job.status === 'applied')applied.push(job);
      if(job.status === 'recruitercall')recruitercall.push(job);
      if(job.status === 'interview')interview.push(job);
      if(job.status === 'offer')offer.push(job);
    });

    if(this.state.clickedAddButton){
      return(<div>
        Add Field Props
        <button onClick={this.onSubmitJobHandler} type="button">Submit</button>
      </div>)
    }

    return (<div style={{display:"flex"}}>
      <Jobs addClickedHandler={this.addClickedHandler} name='Wishlist' jobs ={wishlist}/>
      <Jobs addClickedHandler={this.addClickedHandler} name='Applied' jobs ={applied}/>
      <Jobs addClickedHandler={this.addClickedHandler} name='Recruiter call' jobs ={recruitercall}/>
      <Jobs addClickedHandler={this.addClickedHandler} name='Interview' jobs ={interview}/>
      <Jobs addClickedHandler={this.addClickedHandler} name='Offer' jobs ={offer}/>
    </div>)
  }
};

const mapStateToProps = (state)=>({
  jobs : state.jobs.jobs
});

export default connect(mapStateToProps,{getJobsThunk, addJobThunk, updateJobThunk, deleteJobThunk})(JobsContainer);