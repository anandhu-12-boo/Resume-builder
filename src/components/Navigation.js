import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="yellow" variant="yellow" className="border-bottom" sticky="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-decoration-none text-black font-weight-bold"><span font-weight-bold>Resume Builder</span></NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="mx-2 text-decoration-none text-black">Home</NavLink>
          <NavLink to="#" className="mx-2 text-decoration-none text-black">About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
