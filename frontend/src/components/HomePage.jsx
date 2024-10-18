import React from 'react'
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const HomePage = () => {
    return (
        <>
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
