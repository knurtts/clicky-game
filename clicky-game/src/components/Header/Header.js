import React from "react";
import "./style.css";

function Header(props) {
    return(
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="row">
                <h1 className="col-md-4">The Godzilla Clicky-Game</h1>
                <p className="col-md-4"><strong>Click on an image to increase your score. But don't click on the same one twice!</strong></p>
                <div className="col-md-3">
                    <div className="row">
                        <h3>Your Score: {props.currentScore}</h3>
                    </div>
                    <div className="row">
                        <h3>High Score: {props.highScore}</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;