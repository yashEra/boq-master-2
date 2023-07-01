import React from 'react';
import './style/ButtonOutline.css';

const ButtonOutline = (props) => {
    return ( 
        <div>
            <button className='nav__button__style_outline'>{props.text}</button>
        </div>
     );
}
 
export default ButtonOutline;