import React from "react";
import './Greetings.css';
const Greetings=(props)=>{
    return ( 
    <div className="Greetings">
        <h3>Hey, Mohammed Ameer Hamza.</h3>
        <span className="greet">{props.greet}!</span>
    </div>
    )
}
export default Greetings;