import React from "react";
import "./header.css";
import {HeaderStyle} from "../styles";

const header = props => {
    return(
        <div>
            <HeaderStyle>
            
                <video id="background-video" loop autoPlay>
                    <source src={`${process.env.PUBLIC_URL}/assets/PeonyBackground.mp4`} type="video/mp4" width = "100%"/>
                    <source src={`${process.env.PUBLIC_URL}/assets/PeonyBackground.mp4`} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </HeaderStyle>                
        </div>
    )}

export default header    