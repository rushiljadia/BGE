import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Import the hook

const HomePage = () => {
    const navigate = useNavigate(); // Initialize the hook

    return (
        <Container fluid className="mt-5">
            <Row className="justify-content-center text-center">
                <Col md={8}>
                    <h1>Welcome to BGE</h1>
                    <p>
                        BGE is a pharmaceutical harm reduction tool...
                    </p>
                    <Button variant="primary" onClick={() => navigate('/login')}>
                        Get Started
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
