import React from 'react'; 
import profilePic from '../profile.jpeg';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return(
        <Container className='about bg-dark vertical-center' fluid>
            <Row className='mx-auto about-row'>
                <Col className='text-center' sm={12} > 
                    <Image src={profilePic} className='profile-pic' roundedCircle />
                </Col>
                <Col className='about-me text-white'> 
                <h1>About Me</h1><br/>
                <p>I am a technical, meticulous, detail oriented, and highly motivated individual. 
                    In the past, I have honed and harnessed these skills when I worked as a book binder, 
                    done custom car builds, and by starting my own business from scratch. In attending the 
                    Flatiron Full-Time Software Immersive Course, I have put these skills to the test. 
                    Now I can make beautiful websites with technologies like Ruby on Rails, Javascript, 
                    React, and Redux. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About; 