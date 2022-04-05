import React from "react";
import { connect } from 'react-redux';
import {getJobsThunk, addJobThunk, updateJobThunk, deleteJobThunk} from '../redux/jobReducer';
import Jobs from "../components/Jobs";
import AddJobForm from '../components/AddJobForm';

//Testing Jobs
import {addJobAction} from '../redux/jobReducer';

class JobsContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clickedAddButton : false,
      jobData : {},
    }
  }

  componentDidMount(){
    //this.props.getJobsThunk();
  }

  addClickedHandler = () =>{
    // console.log('Adding job');
    this.setState({clickedAddButton:true})
  }

  onCardClickHandler = (data) =>{
    console.log('Works on click in class');
    console.log(data);
    this.setState({clickedAddButton:true, jobData:data});
  }
  
  onSubmitJobHandler = (data) =>{
    // console.log('Submitting job');
    // console.log('jobdescription', data.jobdescription)
    // console.log('salaryrange' , data.salaryrange)
    // console.log('company', data.company)
    // console.log('location', data.location)
    // console.log('jobstatus',data.jobstatus);
    //this.props.addJobThunk();
    //this just for test
    this.props.addJobAction(data);
    this.setState({clickedAddButton:false});
  }

  render(){
    console.log('Cliecked button: ', this.state.clickedAddButton);
    const wishlist = [];
    const applied = [];
    const recruitercall = [];
    const interview = [];
    const offer = [];

    this.props.jobs.forEach(job=>{
      if(job.jobstatus === 'wishlist')wishlist.push(job);
      if(job.jobstatus === 'applied')applied.push(job);
      if(job.jobstatus === 'recruitercall')recruitercall.push(job);
      if(job.jobstatus === 'interview')interview.push(job);
      if(job.jobstatus === 'offer')offer.push(job);
    });

    if(this.state.clickedAddButton){
      return(<div>
        {/* Add Field Props
        <button onClick={this.onSubmitJobHandler} type="button">Submit</button> */}
        <AddJobForm info={this.state.jobData} onSubmitJobHandler={this.onSubmitJobHandler} />
      </div>)
    }

    return (<div style={{display:"flex"}}>
      <Jobs onCardClickHandler={this.onCardClickHandler} addClickedHandler={this.addClickedHandler} name='Wishlist' jobs ={wishlist}/>
      <Jobs onCardClickHandler={this.onCardClickHandler} addClickedHandler={this.addClickedHandler} name='Applied' jobs ={applied}/>
      <Jobs onCardClickHandler={this.onCardClickHandler} addClickedHandler={this.addClickedHandler} name='Recruiter call' jobs ={recruitercall}/>
      <Jobs onCardClickHandler={this.onCardClickHandler} addClickedHandler={this.addClickedHandler} name='Interview' jobs ={interview}/>
      <Jobs onCardClickHandler={this.onCardClickHandler} addClickedHandler={this.addClickedHandler} name='Offer' jobs ={offer}/>
    </div>)
  }
};

const mapStateToProps = (state)=>({
  jobs : state.jobs.jobs
});

export default connect(mapStateToProps,{getJobsThunk, addJobThunk, updateJobThunk, deleteJobThunk, addJobAction})(JobsContainer);