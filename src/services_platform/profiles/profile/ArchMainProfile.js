import React from 'react'
import "../style_profile/ArchMainProfile.css";

function ArchMainProfile() {
  return (
    <div className="a">
      <div className="back_image_a" />
      <div className="profile_a">
        <div className="dp_info_a">
          <p>
            <span className="hi-text_a">HI THERE!</span>
            <br />
            <span className="im-text_a">I'M </span>
            <span className="profession-text_a">AN ARCHITECT</span>
            <br />
            <span className="info-text_a">
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
            <a href="#">
              <button className="about_button_a">More about me</button>
            </a>

            <button className="project_button_a">Projects</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArchMainProfile
