import React from 'react'
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const HomePage = () => {
    return (
        <>
            {/* Navigation Bar */}
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">BGE</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/drug-info">API TEST LINK</Nav.Link>
                        </Nav>
                        {/* Login Button*/}
                        <Nav>
                            <Button variant="outline-light" href="/login">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Main Section */}
            <Container fluid className="mt-5">
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h1>Welcome to BGE</h1>
                        <p>
                            BGE is a pharmaceutical harm reduction tool that provides doctors and patients with a secure and intelligent platform to prescribe medications safely by analyzing patient history, current medications, and potential drug interactions, ensuring accurate dosages and reducing the risk of adverse effects.
                        </p>
                        <Button variant="primary" href="/get-started">
                            Get Started
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage
