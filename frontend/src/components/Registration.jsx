import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Modal, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions!");
    }
    // further validation or API call
  };

  const handleShowTerms = () => setShowTerms(true);
  const handleCloseTerms = () => setShowTerms(false);

  return (
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100 justify-content-center">
          <Col md={6} lg={4} className="text-center">
            <Image src="../assets/logo-main.png" alt="Account creation image" fluid className="mb-4" />

            <h2 className="mb-4">Create Account</h2>

            <Form onSubmit={handleSubmit}>
              {/* Name Field */}
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              {/* Email Field */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              {/* Password Field */}
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {/* Confirm Password Field */}
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              {/* Terms & Conditions Checkbox */}
              <Form.Group controlId="formTerms" className="mb-4">
                <Form.Check
                    type="checkbox"
                    label={
                      <span>
                    I accept the{" "}
                        <span
                            onClick={handleShowTerms}
                            style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                        >
                      Terms & Conditions
                    </span>
                  </span>
                    }
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
              </Form.Group>

              {/* Sign Up Button */}
              <Button variant="primary" type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>

            {/* "Already have an account?" Text */}
            <p className="mt-3">
              Already have an account?{' '}
              <span
                  style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => navigate('/login')}
              >
              Login here
            </span>
            </p>
          </Col>
        </Row>

        {/* Modal for Terms & Conditions */}
        <Modal show={showTerms} onHide={handleCloseTerms}>
          <Modal.Header closeButton>
            <Modal.Title>Terms & Conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Add terms and conditions */}
            <p>Welcome to our terms and conditions! Here you can provide detailed terms and conditions for the user to read.</p>
            <p>Make sure to outline all legal responsibilities, privacy policies, and other necessary user agreements.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseTerms}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
  );
};

export default Register;
