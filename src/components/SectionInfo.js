import React from "react";
import "./style/Knowladge.css";
import knowladgeMain from "../images/knowladgeMain.svg";

const SectionInfo = (props) => {
  return (
    <div className="knowladge__container">
      <div className="Knowladge__component">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="Knowladge__component">
        <img src={props.imageSource} alt={knowladgeMain} />
      </div>
    </div>
  );
};

export default SectionInfo;
