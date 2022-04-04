import React from 'react';
import login_image from '../assets/login_image.jpg'

const Login = ({
  startDate
}) => {
  const jsDate = new Date(startDate);
  console.log(startDate, jsDate);

  return (
    <div id="login_page" className="w-screen h-auto bg-white flex text-slate-100">
        <div id="info_container" className="w-50 h-100">
            <h1>Welcome Back</h1>
            <h5>We are glad you are back! Please enter your details.</h5>
            <button className="bg-black"><img src="" /> Sign in with Google</button>
            <section className="flex">
            <hr className="w-1/3"></hr>
            <span>or Sign in with Email</span>
            <hr className="w-1/3"></hr>
            </section>
        </div>
        <div id="advert_container" className="w-10 h-10">
            <img src={login_image} alt="two girls preparing for interview" className="w-10 h-10"/>
        </div>
    </div>
  );
};

export default Login;