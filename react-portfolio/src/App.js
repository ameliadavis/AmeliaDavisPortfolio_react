import React,{useState,useEffect} from 'react';
import Header from "./components/header";
import Nav from "./components/navbar";
import Portfolio from './components/portfolio';
import Footer from "./components/footer"
import {Row, Col, Container } from "reactstrap";
import About from "./components/about"
// import PortfolioContainerStyle from "./styles/index.js";

const App = () => {
      return (
        <div className = "App">
          <wrapper>
           <Row>
              <Header></Header>
           </Row >
               <div style={{ backgroundColor: '#E9F7F6' }}>
               <Container >
                        <Row style={{padding: '30px'}}>
                           <Col md={4} >
                                 <Portfolio></Portfolio>
                           </Col>
                           <Col md={4} >
                                 <Portfolio></Portfolio>
                           </Col>
                           <Col md={4} >
                                 <Portfolio></Portfolio>
                           </Col> 
                        </Row>
                        <Row style={{padding: '30px'}}>
                           <Col md={4} >
                                 <Portfolio></Portfolio>
                           </Col>
                           <Col md={4} >
                                 <Portfolio></Portfolio>
                           </Col>
                           <Col md={4} >
                                 <Portfolio></Portfolio>
                           </Col> 
                        </Row>
                     </Container>
                  </div>
                     <About> </About>
           <Footer></Footer>
          </wrapper>
        </div>
  
      );
}

export default App;
