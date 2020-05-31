import React, {useState,useEffect}  from 'react';
import Header from "./header";
import Portfolio from './portfolio';
import Footer from "./footer"
import {Row, Col, Container } from "reactstrap";
import About from "./about"
import Project from './projectView';

const Projects = [{"key":"1","Img":"Tripoints","title":"TriPoints","subtitle":"See the full cost of your new Mecedes-Benz", "Description": "Bigger Lorem Ipsum", "github":"https://github.com/MustafaKhairalla/project-duck-2.0.git", "deployed":"https://tripoint.herokuapp.com/"},
{"key":"2","Img":"Foodecipie","title":"Foodecipie","subtitle":" A food and recipie app", "Description": "Bigger Lorem Ipsum", "github":"https://github.com/MustafaKhairalla/Foodecipe", "deployed":"http://mustafakhairalla.github.io/duck-duck-code/"},
{"key":"3","Img":"NoteTaker","title":"Note Taker","subtitle":"Track notes to yourself", "Description": "Add, Subtract and save notes with this full stack application. Using express routing for server interaction", "github":"https://github.com/ameliadavis/NoteTaker.git", "deployed":"https://shielded-ridge-84017.herokuapp.com/"},
{"key":"4","Img":"WeatherDsshboard","title":"Weather App","subtitle":"See and search the weather", "Description": "This application utalized an API for and Axios for querying the API", "github":"https://ameliadavis.github.io/Weather-App.git", "deployed":"https://infinite-tundra-64204.herokuapp.com/"},
{"key":"5","Img":"BurgerApp","title":"Burger Devour","subtitle":"Create and Devour some burgers", "Description": "Bigger Lorem Ipsum", "github":"https://github.com/ameliadavis/BurgerHomework.git", "deployed":"https://tripoint.herokuapp.com/"},
{"key":"6","Img":"FitnessDash","title":"Fitness Dashboard","subtitle":" Track your Workout", "Description": " a full stack application utalizing mongoos and Mongo db to create and update your workouts. ", "github":"https://github.com/ameliadavis/FitenessTracker.git", "deployed":"https://morning-river-69128.herokuapp.com/?id=5eb77c3042dd980017bfed67"},
 ];


const Home = (props) => {
      const [state, setState] = useState({
         cardID: "",
         cardTitle: "",

        });
        const {cardID, CardTitle}= state; 

 
 return(
    <wrapper>
           <Row>
              <Header></Header>
           </Row >
               <div style={{ backgroundColor: '#E9F7F6' }}>
               <Container >
                        <Row style={{padding: '30px'}}>
                                 {Projects.map(project =>
                                 <Col md={4} style={{padding: '4px'}} >
                                    <Portfolio
                                          key =  {project.key}
                                          img = {project.Img}
                                          title = {project.title}
                                          subtitle = {project.subtitle}
                                          description = {project.description}
                                          github = {project.github}
                                          deployed = {project.deployed}
                                          />
                                          </Col>
                                    )} 
                        </Row>
                     </Container>
                  </div>
                     <About> </About>
           <Footer></Footer>
          </wrapper>
    )
 }

 export default Home;