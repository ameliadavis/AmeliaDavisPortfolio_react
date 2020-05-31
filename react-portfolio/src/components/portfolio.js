import React, {useState} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,Jumbotron, Container, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter, CardFooter  } from 'reactstrap';

import {CardStyle} from "../styles/index.js";




const Portfolio = props => {

    
    return(
        <div>
            <CardStyle>
                <Card>
                    <CardImg top width="300px" top height="300px" src ={`${process.env.PUBLIC_URL}/assets/${props.img}.png`} alt="Card image cap"  />
                    <CardBody>
                        <CardTitle><h5>{props.title}</h5></CardTitle>
                        <CardSubtitle>{props.subtitle}</CardSubtitle>
                        <CardText>{props.description} {props.img}</CardText>
                    </CardBody>
                    <CardFooter>
                        <Button href = {props.github} target="_Blank">Git Hub</Button>
                        <Button href= {props.deployed} target="_Blank">View App</Button>
                    </CardFooter>
                </Card>
            </CardStyle>
        </div>
    )
}

export default Portfolio   