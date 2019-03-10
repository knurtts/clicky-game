import React from "react";
import "./style.css";


export default function GojiCard(props) {
    return (
        <div className="card">
        <img 
            src={props.src} className="card-img-top" 
            alt={props.name} 
            onClick={props.increaseScore} 
            id={props.key} />
        </div>
    );
};
