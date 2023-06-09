import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
    <Navbar className="nav-tabs-lg" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" exact={true}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" exact={true}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" exact={true}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" exact={true}>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/recommendations" exact={true}>
              Recommendations
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
