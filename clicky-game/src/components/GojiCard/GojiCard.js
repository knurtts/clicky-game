import React from "react";
import "./style.css";

function GojiCard(props) {
    return (
        <div className="card" onClick={ () => props.Randomize()}>
            <img src={props.img} className="card-img-top" alt="..." />
        </div>
    );
};

export default GojiCard;