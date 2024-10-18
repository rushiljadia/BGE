import React from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
  return (
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
  )
}

export default NavBar