import React from "react";
import "./header.css";

const header = props => {
    return(
        <div>
             {/* <img className = "logo" src = {`${process.env.PUBLIC_URL}/assets/AD_Logo.png`} /> */}
             <h1>Amelia Davis</h1>
            <video id="background-video" loop autoPlay>
                <source src={`${process.env.PUBLIC_URL}/assets/HeaderVideo_Red.mp4`} type="video/mp4" width = "100%"/>
                <source src={`${process.env.PUBLIC_URL}/assets/HeaderVideo_Red.mp4`} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
           
        </div>
    )}

export default header    