import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, CardFooter  } from 'reactstrap';

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
                    </CardBody>
                    <CardFooter>
                        <Button href = {props.github} target="_Blank" style={{margin: '4px'}} >Git Hub</Button>
                        <Button href= {props.deployed} target="_Blank" style={{margin: '4px'}}>View App</Button>
                    </CardFooter>
                </Card>
            </CardStyle>
        </div>
    )
}

export default Portfolio   