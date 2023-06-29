import React from 'react';
import './style/CardRevers.css';


const CardReverse = (props) => {
    return ( 
    <div>
        <div className='cardReverse__container'>
            <h1>{props.heder}</h1>
            <hr/>

            <p>{props.info}</p>
            
            <img src = {props.imageSource} alt=''/>
        </div>
        
    </div> 
    );
    
}

export default CardReverse;