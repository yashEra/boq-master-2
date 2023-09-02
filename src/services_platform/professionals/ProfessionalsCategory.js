import React from "react";
import "../style/style.css";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";

const ProfessionalsCategory = () => {
  return (
    <div>
      <table id="table">
        <tbody>
          <tr>
            <td colSpan="2">
              <div className="header">Professionals Category</div>
            </td>
            <td colSpan="2" style={{ textAlign: "right" }}>
              <div className="header"></div>
            </td>
          </tr>
          <tr>
            <td colSpan="4"></td>
          </tr>
          <tr>
            <td>
              <div className="div1">
                <img src={img1} style={{ width: "100%" }} />
                <p>
                  "Discover awe-inspiring architectural wonders that redefine
                  innovation and elegance in our curated collection on the BoQ
                  website."
                </p>
                <button
                  className="btn btn1"
                  onClick={() => (window.location.href = "#")}
                >
                  Architecture
                </button>
                <br />
                <br />
              </div>
            </td>
            <td>
              <div className="div1">
                <img src={img2} style={{ width: "100%" }} />
                <p>
                  "Empowering efficient construction with precise cost
                  management - Your trusted Quantity Surveyors."
                </p>
                <button
                  className="btn btn2"
                  onClick={() => (window.location.href = "#")}
                >
                  Quantity Surveyors
                </button>
                <br />
                <br />
              </div>
            </td>
            <td>
              <div className="div1">
                <img src={img3} style={{ width: "100%" }} />
                <p>
                  "Building the world's foundation, one blueprint at a time -
                  Trust our skilled civil engineers to construct your dreams
                  with precision and innovation."
                </p>
                <button
                  className="btn btn3"
                  onClick={() => (window.location.href = "#")}
                >
                  Civil Engineers
                </button>
                <br />
                <br />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export default ProfessionalsCategory;
