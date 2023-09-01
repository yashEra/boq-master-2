import React from 'react'
import "../style_profile/QSMainProfile.css";

function QSMainProfile() {
  return (
    <div className="q">
      <div className="back_image" />
      <div className="profile">
        <div className="dp_info">
          <p>
            <span className="hi-text">HI THERE!</span>
            <br />
            <span className="im-text">I'M </span>
            <span className="profession-text">A QUANTITY SURVEYOR</span>
            <br />
            <span className="info-text">
              Looking for an experienced Quantity Surveyor to ensure your
              construction project stays on budget and on track? Your search
              ends here! As a dedicated Quantity Surveyor, I offer a range of
              services tailored to meet your project's financial needs.I bring a
              passion for ensuring cost efficiency without compromising quality.
              With a sharp eye for detail and a commitment to delivering
              projects on time and within budget, I am your partner in
              successful project delivery. Whether you're embarking on a new
              construction venture or seeking to optimize existing projects, I'm
              here to provide the expertise you need.
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

export default QSMainProfile
