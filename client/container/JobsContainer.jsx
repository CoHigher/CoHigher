import React from "react";
import { connect } from "react-redux";
import {
  getJobsThunk,
  addJobThunk,
  updateJobThunk,
  deleteJobThunk,
} from "../redux/jobReducer";
import Jobs from "../components/Jobs";
import AddJobForm from "../components/AddJobForm";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

//Testing Jobs
import { addJobAction } from "../redux/jobReducer";

class JobsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAddButton: false,
      jobData: {},
      clickedUpdateCard: false,
    };
  }

  componentDidMount() {
    this.props.getJobsThunk(this.props.user.userid);
  }

  addClickedHandler = () => {
    this.setState({ clickedAddButton: true });
  };

  onCardClickHandler = (data) => {
    console.log("Works on click in class");
    console.log(data);
    this.setState({
      clickedAddButton: true,
      jobData: data,
      clickedUpdateCard: true,
    });
  };

  onSubmitJobHandler = (data) => {
    if (!this.state.clickedUpdateCard) {
      this.props.addJobThunk(data);
    } else {
      this.props.updateJobThunk(Object.assign({}, this.state.jobData, data));
    }
    this.setState({
      clickedAddButton: false,
      jobData: {},
      clickedUpdateCard: false,
    });
  };

  onDeleteCard = (jobId) => {
    console.log("Is it comming here");
    this.props.deleteJobThunk(jobId);
  };

  render() {
    console.log("Cliecked button: ", this.state.clickedAddButton);
    const wishlist = [];
    const applied = [];
    const recruitercall = [];
    const interview = [];
    const offer = [];

    this.props.jobs.forEach((job) => {
      if (job.jobstatus === "wishlist") wishlist.push(job);
      if (job.jobstatus === "applied") applied.push(job);
      if (job.jobstatus === "recruiter") recruitercall.push(job);
      if (job.jobstatus === "interview") interview.push(job);
      if (job.jobstatus === "offer") offer.push(job);
    });

    if (this.state.clickedAddButton) {
      return (
        <div>
          <AddJobForm
            info={this.state.jobData}
            onSubmitJobHandler={this.onSubmitJobHandler}
            userId={this.props.user.userid}
          />
        </div>
      );
    }

    return (
      <div className="Main_Container">
        <NavBar />
        <div className="Job_Container">
          <Jobs
            className="Wishlist"
            onCardClickHandler={this.onCardClickHandler}
            addClickedHandler={this.addClickedHandler}
            onDeleteCard={this.onDeleteCard}
            name="Wishlist"
            jobs={wishlist}
          />
          <Jobs
            className="Applied"
            onCardClickHandler={this.onCardClickHandler}
            addClickedHandler={this.addClickedHandler}
            onDeleteCard={this.onDeleteCard}
            name="Applied"
            jobs={applied}
          />
          <Jobs
            className="Recruiter"
            onCardClickHandler={this.onCardClickHandler}
            addClickedHandler={this.addClickedHandler}
            onDeleteCard={this.onDeleteCard}
            name="Recruiter"
            jobs={recruitercall}
          />
          <Jobs
            className="Interview"
            onCardClickHandler={this.onCardClickHandler}
            addClickedHandler={this.addClickedHandler}
            onDeleteCard={this.onDeleteCard}
            name="Interview"
            jobs={interview}
          />
          <Jobs
            className="Offer"
            onCardClickHandler={this.onCardClickHandler}
            addClickedHandler={this.addClickedHandler}
            onDeleteCard={this.onDeleteCard}
            name="Offer"
            jobs={offer}
          />
          <SideBar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  user: state.user,
});

export default connect(mapStateToProps, {
  getJobsThunk,
  addJobThunk,
  updateJobThunk,
  deleteJobThunk,
  addJobAction,
})(JobsContainer);
