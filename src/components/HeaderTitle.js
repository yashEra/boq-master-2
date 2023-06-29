import React from 'react';
import './style/Header.css'

const  HeaderTitle= (props) => {
    return ( 
        <div>
            <div className='header__title'>
                <div className='header__title__component'><h1>{props.heder}</h1></div>
                <div className='header__title__component'><h4>{props.subheder}</h4></div>

            </div>

        </div>
     );
}
 
export default HeaderTitle;