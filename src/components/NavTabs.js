import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className ="nav-tabs-lg" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => handlePageChange('Home')}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => handlePageChange('About')}>About Me</Nav.Link>
            <Nav.Link href="#projects" onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
