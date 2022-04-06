import React, { useState } from "react";
import login_image from "../assets/login-image.jpg";
import google_icon from "../assets/google-icon.png";

import axios from "axios";

const Signup = (props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cohortId, setCohort] = useState("");

  const onUserCreation = () => {
    props.onUserCreation({ fullname, email, password, cohortId });
  };

  return (
    <div className="Login_page">
      <div className="Primary_Login_Container">
        <div className="Left_Container">
          <section className="Top_Title">COHIGHER</section>
          <div className="Info">
            <h1>Sign Up</h1>
            <h5>Tackle the job search together with your friends.</h5>
            <h4>fullname</h4>
            <input
              className="Sigup_buttons"
              placeholder="Enter your fullname"
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            ></input>
            <h4>Email</h4>
            <input
              className="Sigup_buttons"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <h4>Password</h4>
            <input
              className="Sigup_buttons"
              placeholder="Create a password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <span className="Placeholder_Text2">
              Must be at least 8 characters.
            </span>
            <h4>Cohort</h4>
            <input
              className="Sigup_buttons"
              placeholder="Enter your cohort"
              onChange={(e) => {
                setCohort(e.target.value);
              }}
            ></input>
            <span className="Placeholder_Text2">
              Must be all capitalizations and no spaces: "NY31".
            </span>
            <button
              className="Login_Button2"
              type="submit"
              onClick={() => {
                onUserCreation();
              }}
            >
              Create account
            </button>
            <button className="Google_Button">
              <img className="Google_Icon" src={google_icon} /> Sign up with
              Google
            </button>
            <h4 className="Centered_H4">
              Already have an account? <a href="/">Log in</a>
            </h4>
          </div>
          <section className="Bottom_Title">© Cohigher 2022</section>
        </div>
        <div className="Advert">
          <img className="Ad_img" src={login_image}></img>
        </div>
      </div>
    </div>
  );
};

export default Signup;
