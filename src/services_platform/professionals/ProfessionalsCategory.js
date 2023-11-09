import React from "react";
import "../Style/style.css";
import img1 from "../Assests/img1.jpg";
import img2 from "../Assests/img2.jpg";
import img3 from "../Assests/img3.jpg";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProfessionalsCategory = () => {
  return (
    <div>
      <NavBar />
      <div>
        <table id="table">
          <tbody>
            <tr>
              <td colSpan="2">
                {/* <div className="header">Professionals Category</div> */}
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
                  {/* <img src={img1} style={{ width: "100%" }} /> */}
                  <p>
                    "Discover awe-inspiring architectural wonders that redefine
                    innovation and elegance in our curated collection on the BoQ
                    website."
                  </p>
                  <button
                    className="btn btn1"
                    onClick={() => (window.location.href = "/architect-list")}
                  >
                    Architecture
                  </button>
                  <br />
                  <br />
                </div>
              </td>
              <td>
                <div className="div1">
                  {/* <img src={img2} style={{ width: "100%" }} /> */}
                  <p>
                    "Empowering efficient construction with precise cost
                    management - Your trusted Quantity Surveyors."
                  </p>
                  <button
                    className="btn btn2"
                    onClick={() => (window.location.href = "/qs-list")}
                  >
                    Quantity Surveyors
                  </button>
                  <br />
                  <br />
                </div>
              </td>
              <td>
                <div className="div1">
                  {/* <img src={img3} style={{ width: "100%" }} /> */}
                  <p>
                    "Building the world's foundation, one blueprint at a time -
                    Trust our skilled civil engineers to construct your dreams
                    with precision and innovation."
                  </p>
                  <button
                    className="btn btn3"
                    onClick={() => (window.location.href = "/engineer-list")}
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
      <Footer />
    </div>
  );
};

export default ProfessionalsCategory;
