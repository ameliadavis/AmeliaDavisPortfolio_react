import React from "react";
// import "./header.css";
import {HeaderStyle} from "../styles";

const header = props => {
    return(
        <div>
            <HeaderStyle>
                <video loop muted autoplay id="background-video" width="98%" height="98%" >
                    <source src={`${process.env.PUBLIC_URL}/assets/PeonyBackground.mp4`} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> 
                 {/* <video id="background-video" loop autoPlay width="98%" height="98%" src={`${process.env.PUBLIC_URL}/assets/PeonyBackground.mp4`} type="video/mp4" /> */}
            </HeaderStyle>                
        </div>
    )}

export default header    