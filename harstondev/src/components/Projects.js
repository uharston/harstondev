import React from 'react'; 
import Primo from '../Portfolio/Primo-screenshot.png'
import CarQuiz from '../Portfolio/CarQuiz-Screenshot.png'
import Pooch from '../Portfolio/Pooch-screenshot.png'

import { Container, Col, Row, Image } from 'react-bootstrap';

function Projects() {
    return(
        <div>
            <div className='section-title'>
                <h1>My Projects</h1>
            </div>
            <Container className='projects bg-dark' fluid>
                
                <Row className='project-rows'>
                    <Col xs={12} lg={6}>
                        <Image src={Primo} className='project-image' rounded/>
                    </Col>
                    <Col xs={12} lg={6}>
                    <p> Skateboarders are always looking for the next best spot to shred. Primo is a web app designed to connect 
                        skateboarders all over the US to the best skate spots in their local area. </p>
                    </Col>
                </Row>
                <Row className='project-rows'>
                    <Col>
                    <Image src={CarQuiz} className='project-image' rounded/>
                    </Col>
                    <Col>
                    <p className='lead display-7'>Do you think of yourself as a somewhat of a car connoisseur? CarQuiz is there for you to test if that is a simple 
                        dream or if you are indeed a car guru. 
                    </p>
                    </Col>
                </Row>
                <Row className='project-rows'>
                    <Col>
                    <Image src={Pooch} className='project-image' rounded/>
                    </Col>
                    <Col>
                    Dogs are known to be man's best friend. Pooch connects local rescues to percpective owners looking to give these doggos
                    the love and attention they have been missing. 
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Projects; 