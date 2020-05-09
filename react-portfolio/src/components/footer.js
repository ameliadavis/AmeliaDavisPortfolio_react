import React from "react";
import {Row, Col, Form,FormGroup, Label, Input, Button } from "reactstrap";
// import "./portfolio.css";

const footer = props => {
    return(
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
                    <img className = "Porfolio" src = {`${process.env.PUBLIC_URL}/assets/instagram@4x.png`} />
                    <img className = "Porfolio" src = {`${process.env.PUBLIC_URL}/assets/portfolio@4x.png`} />
                    <img className = "Porfolio" src = {`${process.env.PUBLIC_URL}/assets/Mobile@4x.png`} />
                    <img className = "Porfolio" src = {`${process.env.PUBLIC_URL}/assets/Email@4x.png`} />
                </Col>
            </Row>         
        </div>
    )}

export default footer   