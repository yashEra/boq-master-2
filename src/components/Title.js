import React from "react";
import './style/Title.css'

const Title = (props) => {
    return (  
        <div className="title__container">
            <h1>{props.title}</h1><hr/>
            <h4>{props.subtitle}</h4>
        </div>
    );
}

export default Title;