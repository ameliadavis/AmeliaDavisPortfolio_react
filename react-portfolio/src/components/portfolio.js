import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Portfolio = props => {
    return(
        <div>
            <Card>
                <CardImg top width="400px" top height="300px" src = {`${process.env.PUBLIC_URL}/assets/placeholder.png`} alt="Card image cap"  />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
           
        </div>
    )}

export default Portfolio   