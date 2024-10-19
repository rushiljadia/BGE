import React from "react";
import {Container, Card, CardSubtitle, CardImg, Image} from "react-bootstrap";

function About() {
    return(
        <>

            <h3></h3>
            {/*<Container >About BGE</Container>*/}
            <Card>
                <h1 style={{color: 'tan', textAlign: 'center'}}>About BGE</h1>
                <CardSubtitle style={{textAlign: 'center'}}>Meet BGE Consortium!</CardSubtitle>
                <CardImg src="src/images/Rushil-profile.JPG" style={{height:'200px',width:'200px'}}/>
                <CardImg src="src/images/Rushil-profile.JPG" style={{height:'200px',width:'200px'}}/>
            </Card>
        </>

    );
}

export default About;