import React from "react";
import {FooterStyle} from "../styles";
import { Container, Row, Col, Form,FormGroup, Input, Button} from "reactstrap"

const footer = props => {
    return(
        <FooterStyle>
          <div>
              <Container>
                    <Row>
                        <Col md = {7}>
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
                        </Col>
                        <Col md ={5}>
                            <a href="https://www.instagram.com/ameliaaltmandavis/" target="_blank">
                                <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Instagram_CIR.png`} />
                            </a>
                            <a href ="" target="_blank">
                                <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/GitHub_CIR.png`} />
                            </a>
                            <a href ="" target="_blank">
                                <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Phone_CIR.png`} />
                            </a>
                            <a href ="mailto: ameliaaltmandavis@gmail.com" >
                            <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Email_CIR.png`} />
                            </a> 
                        </Col>
                    </Row> 
              </Container>
          </div>
        </FooterStyle>
   
    )}

export default footer   