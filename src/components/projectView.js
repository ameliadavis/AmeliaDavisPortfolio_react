import React, { useState } from 'react';
import { Jumbotron, Container, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import {ProjectStyle} from '../styles'



const Project = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <div>
        <ProjectStyle>
          <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
            <Col md = {7}>
                    <Jumbotron fluid>
                        <Container fluid>
                        <video id="project-video" controls loop autoPlay width="98%" height="98%" src={`${process.env.PUBLIC_URL}/assets/NoteTakerVid.mp4`} type="video/mp4"/>
            
                        </Container>
                    </Jumbotron>
                </Col>
                <Col md = {5}>
                <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>  
                </Col>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Deployed App</Button>{' '}
              <Button color="secondary" onClick={toggle}>Git Hub</Button>
            </ModalFooter>
          </Modal>
        </ProjectStyle>
    </div>
  );
};

export default Project;