import React,{useState,useEffect} from 'react';
import {Row, Col} from "reactstrap";
import Header from "./components/header";
import Nav from "./components/navbar";
import Portfolio from './components/portfolio';
import Footer from "./components/footer"
//import {AmeliaStyle} from "../styles"

const App = () => {
      return (
        <div className = "App">
          <wrapper>
           <Row>
              <Header></Header>
           </Row>
           <Nav></Nav>
           <Row>
              <Portfolio></Portfolio>
           </Row>
           <Row>
              <Portfolio></Portfolio>
           </Row>
           <Row>
              <Portfolio></Portfolio>
           </Row>
           <Footer></Footer>
          </wrapper>
        </div>
  
      );
}

export default App;
