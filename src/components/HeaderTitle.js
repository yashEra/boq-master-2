import React from 'react';
import './style/Header.css'
import ButtonOutline from './ButtonOutline'
import ButtonFill from './ButtonFill';

const  HeaderTitle= (props) => {
    return ( 
        <div>
            <div className='header__title'>
                <div className='header__title__component'><h1>{props.heder}</h1></div>
                <div className='header__title__component'><h4>{props.subheder}</h4></div>
                <div className='button__arrange'><ButtonOutline text = 'Features'/> <ButtonFill text = 'Help'/></div>

            </div>

        </div>
     );
}
 
export default HeaderTitle;