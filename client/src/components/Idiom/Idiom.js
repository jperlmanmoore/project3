import React from "react";
import "./Idiom.css";

function Idiom(props) {
    return (
        <div className="container">
            <div className="idiomCard">
                <div id={props.id}>
                    <p>Test content render!</p></div>
            </div>
        </div>
    );
}

export default Idiom; 