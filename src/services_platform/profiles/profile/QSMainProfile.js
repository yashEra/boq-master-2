import React from "react";
import "../style_profile/QSMainProfile.css";

function QSMainProfile() {
  return (
    <div className="q">
      <div className="back_image_q" />
      <div className="profile_q">
        <div className="dp_info_q">
          <p>
            <span className="hi-text_q">HI THERE!</span>
            <br />
            <span className="im-text_q">I'M </span>
            <span className="profession-text_q">A QUANTITY SURVEYOR</span>
            <br />
            <span className="info-text_q">
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
            <a href="#">
              <button className="about_button_q">More about me</button>
            </a>

            <button className="project_button_q">Projects</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default QSMainProfile;
