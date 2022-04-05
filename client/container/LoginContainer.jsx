import React from 'react';
import login_image from '../assets/login-image.jpg'
import google_icon from '../assets/google-icon.png'

const Login = () => {

  return (
    <div className="Login_page">
      <div className="Primary_Login_Container">
        <div className="Left_Container">
          <section className="Top_Title">COHIGHER</section>
          <div className="Info" >
              <h1>Welcome Back</h1>
              <h5>We are glad you are back! Please enter your details.</h5>
              <button className="Google_Button"><img className="Google_Icon"src={google_icon} /> Sign in with Google</button>
              <section className="Sign_Section">
                <hr className="Break_Lines"></hr>
                <span className="Placeholder_Text">or Sign in with Email</span>
                <hr className="Break_Lines"></hr>
              </section>
              <h4>Email</h4>
                <input className="Sigup_buttons" placeholder='mail@website.com'></input>
                <h4>Password</h4>
                <input className="Sigup_buttons" placeholder='Min. 8 character'></input>
              <section className="Remember_Pass">
                <h4><input className="Remember_Check" type="checkbox"/>Remember Me</h4>
                <a href="#"><h4>Forget password</h4></a>
              </section>
              <button className="Login_Button">Login</button>
              <h4>Not registered yet? <a href="#">Create an Account</a></h4>
          </div>
          <section className="Bottom_Title">© Cohigher 2022</section>
        </div>
        <div className="Advert">
          <img className="Ad_img" src={login_image}></img>
          <section className="Glass_Blur">
            <p className="Review_Quote">“I’ve alway wanted a place to track 
              and maintain my job searches in a simple and easy to use interface.”
            </p>
            <section className="Star_Container">
            <p className="Review_Name">Tara Powers</p>
              <svg className="Review_SVG">
                <path d="M58.2,0l5.3,10.7l11.9,1.7l-8.6,8.4l2,11.8l-10.6-5.6l-10.6,5.6l2-11.8L41,12.5l11.9-1.7L58.2,0z M94.9,10.7
                L83,12.5l8.6,8.4l-2,11.8l10.6-5.6l10.6,5.6l-2-11.8l8.6-8.4l-11.9-1.7L100.2,0L94.9,10.7z M135.9,10.7L124,12.5l8.6,8.4l-2,11.8
                l10.6-5.6l10.6,5.6l-2-11.8l8.6-8.4l-11.9-1.7L141.2,0L135.9,10.7z M177.9,10.7L166,12.5l8.6,8.4l-2,11.8l10.6-5.6l10.6,5.6l-2-11.8
                l8.6-8.4l-11.9-1.7L183.2,0L177.9,10.7z M11.9,10.7L0,12.5l8.6,8.4l-2,11.8l10.6-5.6l10.6,5.6l-2-11.8l8.6-8.4l-11.9-1.7L17.2,0
                L11.9,10.7z"/>
              </svg>
            </section>
            <p className="Review_Title">Codesmith Resident</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;