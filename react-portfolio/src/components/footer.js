import React from "react";
import {FooterStyle} from "../styles";
import { Row, Col, Form,FormGroup, Label, Input, Button} from "reactstrap"

const footer = props => {
    return(
        <FooterStyle>
          <div>
            <Row>
                <Col md = {7}>
                    <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
                <Col md ={5}>
                    <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Instagram.png`} />
                    <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Desktop.png`} />
                    <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Phone.png`} />
                    <img className = "ImgLinks" src = {`${process.env.PUBLIC_URL}/assets/Email.png`} />
                </Col>
            </Row>         
          </div>
        </FooterStyle>
   
    )}

export default footer   