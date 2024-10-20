import React from "react";
import {Container, Card, CardSubtitle, CardImg, Image, Row, Col, ListGroup} from "react-bootstrap";

function About() {
    return(
        <>
            <h3></h3>
            {/*<Container >About BGE</Container>*/}
            <Card style={{
                backgroundColor: 'gray',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1 style={{color: 'tan', textAlign: 'center'}}>About BGE</h1>
                <CardSubtitle style={{textAlign: 'center'}}>Meet BGE Consortium!</CardSubtitle>
                <Row style={{padding: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                    {/* Rushil Card */}
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', margin: 'auto' }}>
                            <Card.Img variant="top" src="src/images/Rushil-profile.JPG" />
                            <Card.Body>
                                <Card.Title>Rushil Jadia</Card.Title>
                                <Card.Subtitle style={{textAlign: 'left'}}>Lead Programmer</Card.Subtitle>
                                <Card.Text>
                                    <br/>Major: Computer Science<br/>
                                    Minor: Applied Mathematics
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://linkedin.com/in/rushiljadia" target="_blank">LinkedIn</Card.Link>
                                <Card.Link href="https://github.com/rushiljadia" target="_blank">GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Chris Card */}
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', margin: 'auto' }}>
                            <Card.Img variant="top" src="src/images/Chris_Profile.jpg"/>
                            <Card.Body>
                                <Card.Title>Chris DeMarchi</Card.Title>
                                <Card.Subtitle style={{textAlign: 'left'}}>Lead Programmer</Card.Subtitle>
                                <Card.Text>
                                    <br/>Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://www.linkedin.com/in/christopher-demarchi-30a5961a0/">LinkedIn</Card.Link>
                                <Card.Link href="https://github.com/cdemarch">GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Kelsey Card */}
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', margin: 'auto' }}>
                            <Card.Img variant="top" src="src/images/Rushil-profile.JPG" />
                            <Card.Body>
                                <Card.Title>Kelsey Phelps</Card.Title>
                                <Card.Subtitle style={{textAlign: 'left'}}>Lead Programmer</Card.Subtitle>
                                <Card.Text>
                                    <br/>Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://www.linkedin.com/in/kelsey-phelps/">LinkedIn</Card.Link>
                                <Card.Link href="https://github.com/kaphelps33">GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Bailey Card */}
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '100%', margin: 'auto' }}>
                            <Card.Img variant="top" src="src/images/Chris_Profile.jpg" />
                            <Card.Body>
                                <Card.Title>Bailey Bowling</Card.Title>
                                <Card.Subtitle style={{textAlign: 'left'}}>Lead Programmer</Card.Subtitle>
                                <Card.Text>
                                    <br/>Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://www.linkedin.com/in/bailey-bowling-55218b266/">LinkedIn</Card.Link>
                                <Card.Link href="https://github.com/BailZ1#">GitHub</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <br/><br/>
            <br/><br/>
            <h3>Hear What Others Have to Say About Us!</h3>
            <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Holy Smokes! This app made sure I never forget my medicine!{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Trusted User
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Something you've never seen before! I applaud BGE!{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Trusted User
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Take all my money! I was able to save so much time finding and restocking all medication I need!{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Trusted User
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            These developers are incredible! I wish the best for them!{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Trusted User
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </>

    );
}

export default About;