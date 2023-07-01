import React from "react";
import './style/ButtonFill.css';

const ButtonFill = (props) => {
    return ( 
        <div>
            <button className='nav__button__style_fill'>{props.text}</button>
        </div>
     );
}
 
export default ButtonFill;