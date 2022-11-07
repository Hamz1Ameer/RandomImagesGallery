import React from "react";
const DateTime=()=>{
    let currentDateTime = new Date();
    return  <>
        <h3 contentEditable='true'>Hi there, my name is Mohammed Ameer Hamza</h3>
        
        <div>Todays date is: {currentDateTime.toLocaleDateString()} </div>
        <div>Current Time: {currentDateTime.toLocaleTimeString()}</div>
    </>
}
export default DateTime;