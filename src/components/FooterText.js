import React from "react";
import "./style/FooterText.css";

const FooterText = (props) => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <p>{props.leftText}</p>
        <p>{props.rightText}</p>
      </div>
    </div>
  );
};

export default FooterText;
