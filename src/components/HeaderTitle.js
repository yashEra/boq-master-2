import React from "react";
import "./style/Header.css";
import ButtonOutline from "./ButtonOutline";
import ButtonFill from "./ButtonFill";
import FooterText from "./FooterText";

const HeaderTitle = (props) => {
  return (
    <div className="header__title__container">
      <div className="header__title">
        <div className="header__title__component">
          <h1>{props.heder}</h1>
        </div>
        <div className="header__title__component">
          <h4>{props.subheder}</h4>
        </div>
        <div className="header__title__component">
          <p>{props.info}</p>
        </div>
        <div className="button__arrange">
          <ButtonOutline text="Features" link="./features" />{" "}
          <ButtonFill text="Help" />
        </div>
      </div>
      <FooterText
        leftText="Copyrigh © 2023 | All Right Reseved."
        rightText="DEVELOPED BY GROUP 09"
      />
    </div>
  );
};

export default HeaderTitle;
