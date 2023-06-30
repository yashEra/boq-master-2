import React from 'react';
import './style/Card.css';


const Card = (props) => {
    return ( 
    <div>
        <div className='card__container'>
            <img src = {props.imageSource} alt=''/>
            <h1>{props.heder}</h1>
            <hr/>

            <p>{props.info}</p>
        </div>
        
    </div> 
    );
    
}

export default Card;