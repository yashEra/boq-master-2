import React from 'react'
import "../style_profile/ArchMainProfile.css";

function ArchMainProfile() {
  return (
    <div className="a">
      <div className="back_image" />
      <div className="profile">
        <div className="dp_info">
          <p>
            <span className="hi-text">HI THERE!</span>
            <br />
            <span className="im-text">I'M </span>
            <span className="profession-text">AN ARCHITECT</span>
            <br />
            <span className="info-text">
              Are you in search of a seasoned architect to bring your
              architectural vision to life? Look no further! I am an
              accomplished architect with a passion for creating exceptional
              spaces and designs. With years of experience in the industry, I
              offer a wide range of architectural services.I'm dedicated to
              delivering designs that not only meet but exceed your
              expectations. My commitment to precision, creativity, and client
              satisfaction sets me apart in the field of architecture. Let's
              collaborate to turn your architectural aspirations into reality.
              Contact me today, and together, we can create spaces that inspire.
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

export default ArchMainProfile
