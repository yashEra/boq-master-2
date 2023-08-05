import React from "react";
import PickMeals from "./Assets/pick-meals-image.png";
import ChooseMeals from "./Assets/choose-image.png";
import DeliveryMeals from "./Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Building",
      
    },
    {
      image: PickMeals,
      title: "House",
      
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Start Now</h1>
        <p className="primary-text">
          Our tool simplifies the process of generating a Bill of Quantity.
          You just need to input project data and select relevant items, and the tool will do the rest.
          Select your building type here
        </p><br></br><br></br>
        <p className="primary-text">
          Select your building type here...
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;