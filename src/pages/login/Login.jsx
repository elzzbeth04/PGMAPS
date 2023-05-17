import React from "react";
import "./login.css";


export default function Login() {
  return (
    <div className="login">
       <img 
         alt=""
         src="https://media.designcafe.com/wp-content/uploads/2020/04/16135336/Purple-wall-paint-colours-for-your-home.jpg"></img>
      <div className="login-cont">
        <div className="login-head">
        
         <h1>Welcome To PGMAPS</h1>
          <p>
            Find your perfect PG in seconds with PGMAPS <br></br> The ultimate
            time-saving app for locating nearby PG!
            <br></br><strong>ENJOY!!!!</strong> 
            
          </p>
         
        </div>
        <div className="login-button">
          <button className="login-btn">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
            ></img>
            <p> Sign in with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}