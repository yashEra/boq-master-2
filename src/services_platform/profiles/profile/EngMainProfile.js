import React from "react";
// import Header from "./Header";
import "../style_profile/EngMainProfile.css";

function EngMainProfile() {
  return (
    <div className="e">
      <div className="back_image_e" />
      <div className="profile_e">
        <div className="dp_info_e">
          <p>
            <span className="hi-text_e">HI THERE!</span>
            <br />
            <span className="im-text_e">I'M </span>
            <span className="profession-text_e">A CIVIL ENGINEER</span>
            <br />
            <span className="info-text_e">
              Bring your engineering projects to the next level with my
              professional insight and expertise. Whether you're an individual
              looking to innovate or a business seeking engineering excellence,
              I'm here to help you achieve your goals. Contact me to discuss
              your engineering needs and explore how we can collaborate for
              success.
            </span>
            <br />
            <a href="./about-engineer">
              <button className="about_button_e">More about me</button>
            </a>
            <button className="project_button_e">Projects</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EngMainProfile;
