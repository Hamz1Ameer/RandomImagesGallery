import React from "react";
import Greetings from "./Greetings";
const DateTime=()=>{
    let currentDateTime = new Date();
    let date=currentDateTime.toLocaleDateString();
    let time=currentDateTime.toLocaleTimeString();
    
    const checkTime=()=>{
        if((currentDateTime.getHours()>=0) && (currentDateTime.getHours()<12)){
            return 'Good Morning'
        }
        else if((currentDateTime.getHours()>=12) && (currentDateTime.getHours()<20)){
            return 'Good After Noon';
        }
        else{
            return 'Good Evening';
        }
    }
    let greet=checkTime();
    return  <>
        <Greetings greet={greet}/>
       <div>Today's date is: {date} </div>
        <div>Current Time: {time}</div>
    </>
}
export default DateTime;
