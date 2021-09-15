import React from "react"
import {Row, Col, } from "reactstrap";
import {AboutMe} from "../styles/index.js";


const About = () => {
    return(
        <AboutMe>
            <div>
                <Row>
                    <Col md={6}>
                        <img src = {`${process.env.PUBLIC_URL}/assets/placeholder.png`} width="100%" height="600px"></img>
                    </Col>
                    <Col id="aboutText">
                        <h1>About Me</h1>
                        <p>I am a graphic designer working for Effectv (formerly Comcast spotlight) in the past year 
                            I have had the incredible opportunity to design a brand for a new internal agency 
                            (Mnemonic Agency). I was also part of the team that designed and launched the 
                            mnemonicagency.com website and now I am designing the social media strategy. 
                            I LOVE my job and am fortunate enough to work with talented amazing friends.
                            I also believe it is important to have passions outside of the office and my hobbies inform my work. 
                            From baking incredible Gingerbread houses to floral design for family and friends I am 
                            all about trying everything at least once. Jill of all trades and master of some.</p>
                    </Col>
                </Row>
            </div>
        </AboutMe>
    )}


export default About 