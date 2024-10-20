import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Modal, Image } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validations
    // Check to see if password do or do not match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions!");
    }

    // Prepare user data for API call
    const userData = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    }

    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:8080/api/users/signup', userData);
      console.log('User registered:', response.data);
      alert('Registration successful!');
    } catch (error) {
      // Handle errors
      setErrorMessage(error.response ? error.response.data.message : 'Registration failed!');
      console.error('Error registering user:', error);
    }
  };

  const handleShowTerms = () => setShowTerms(true);
  const handleCloseTerms = () => setShowTerms(false);

  return (
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100 justify-content-center">
          <Col md={6} lg={4} className="text-center">
            {/* Insert Image Here */}
            <Image src="../assets/logo-main.png" alt="Account creation image" fluid className="mb-4" />

            {/* Create Account Title */}
            <h2 className="mb-4">Create Account</h2>

            {/* Display error message if any */}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}


            {/* First Name Value */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
              </Form.Group>

              {/* Last Name Value */}
              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
              </Form.Group>

              {/* Username value */}
              <Form.Group controlId="formUserName" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
              </Form.Group>

              {/* Birthday Value */}
              <Form.Group controlId="formBirthday" className="mb-3">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
              </Form.Group>

              {/* Checkbox for Terms & Conditions */}
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
