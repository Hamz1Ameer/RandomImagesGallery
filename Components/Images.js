import React from "react";
import './images.css'
const Images=()=>{
    const img1='https://picsum.photos/350/300';    // https://picsum.photos is website for random images, just need to enter the width and height seperated with '/'
    const img2='https://picsum.photos/300/300';
    const img3='https://picsum.photos/380/300';
    return <div className="imgs">
        <div className="grid_img">
        <img src={img1} alt='Random' />
        <img src={img2} alt='Random' />
        <img src={img3} alt='Random' />
        </div>
    </div>
}
export default Images;