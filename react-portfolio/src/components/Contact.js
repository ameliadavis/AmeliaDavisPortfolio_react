import React from "react";
import {ContactStyle} from '../styles';
import Navbar from "./navbar"
import { Container, Row, Col, Form,FormGroup, Input, Button} from "reactstrap";

 const Contact  = (props) => {

    return (
        <div>
            <Navbar></Navbar>
            <Container>
            <ContactStyle>
                <div id="contactCard">
                <h2>Go on. Fill it out... </h2>
                <h2>Say hi already</h2>
                <Form>
                        <FormGroup>
                            <Input type="Name" name="Name" id="Name" placeholder="Name " />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email " />
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="text" id="Text Area " placeholder="Your Message " />
                        </FormGroup>
                            <Button>Submit</Button>
                    </Form>

                            <a href="https://www.instagram.com/ameliaaltmandavis/" target="_blank">
                                <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Instagram_CIR.png`} />
                            </a>
                            <a href ="https://github.com/ameliadavis" target="_blank">
                                <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/GitHub_CIR.png`} />
                            </a>
                            <a href ="" target="_blank">
                                <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Phone_CIR.png`} />
                            </a>
                            <a href ="mailto: ameliaaltmandavis@gmail.com" >
                            <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Email_CIR.png`} />
                            </a> 
                </div>
            </ContactStyle>
            </Container>
        </div>
    )
 }

 export default Contact;