import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Links Section */}
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms of Service</a></li>
            </ul>
          </Col>

          {/* About Section */}
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              BGE is a modern platform offering top-notch services. Stay connected to explore the best we have to offer.
            </p>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: contact@bge.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} BGE. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
