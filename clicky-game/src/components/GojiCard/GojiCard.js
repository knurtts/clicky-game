import React from "react";
import "./style.css";


export default function GojiCard(props) {
    return (
        <div className="card shake">
        <img 
            src={props.src} className="card-img-top" 
            alt={props.name} 
            onClick={() => {props.clicked(props.idCard)}} 
            id={props.idCard}
            
            />
        </div>
    );
};
