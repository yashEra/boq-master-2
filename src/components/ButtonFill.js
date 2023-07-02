import React from "react";
import './style/ButtonFill.css';

const ButtonFill = (props) => {
    return ( 
        <div className="scale">
            <a href={props.link}><button className='nav__button__style_fill'>{props.text}</button></a>
        </div>
     );
}
 
export default ButtonFill;