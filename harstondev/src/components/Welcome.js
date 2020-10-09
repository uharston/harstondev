import React from 'react'; 
import { Container, Image } from 'react-bootstrap';
import  backgroundImage  from '../background.jpg'

function Welcome() {
    return(
        <div className='welcome-wrapper'>
            <Container className='welcome'>
                <Container className='welcome-title '>
                    <h1 className='display-4 welcome-h1' >Hello, My Name is Uriah Harston</h1><br/>
                    <h1>I am a Full-Stack Developer at your service.</h1>
                </Container>
            </Container>
        </div>
    )
}

export default Welcome; 