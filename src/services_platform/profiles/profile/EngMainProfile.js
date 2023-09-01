import React from "react";
// import Header from "./Header";
import "../style_profile/EngMainProfile.css";



function EngMainProfile() {
  return (
    
    <div className="e">
      <div className="back_image"/>
      <div className="profile">
        <div className="dp_info">
          <p>
            <span className="hi-text">HI THERE!</span>
            <br />
            <span className="im-text">I'M </span>
            <span className="profession-text">A CIVIL ENGINEER</span>
            <br />
            <span className="info-text">
              Bring your engineering projects to the next level with my
              professional insight and expertise. Whether you're an individual
              looking to innovate or a business seeking engineering excellence,
              I'm here to help you achieve your goals. Contact me to discuss
              your engineering needs and explore how we can collaborate for
              success.
            </span>
            <br />

            <button className="about_button">More about me</button>
            <button className="project_button">Projects</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EngMainProfile;
