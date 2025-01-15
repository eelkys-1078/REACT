import React from "react";
import Profile from './assets/Profile.jpeg';

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={Profile} alt="Profile Picture" />
            <h2 className="card-title">Skylee Schleich</h2>
            <p className="card-text">Web Developer and loves fishing</p>
        </div>
    );
}
export default Card;
