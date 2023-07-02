import React from 'react';
import './style/ButtonOutline.css';

const ButtonOutline = (props) => {
    return ( 
        <div className='scale'>
            <a href={props.link}><button className='nav__button__style_outline'>{props.text}</button></a>
        </div>
     );
}
 
export default ButtonOutline;