import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Área 51 Shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/category/Torso">
            Torso
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Bermudas">
            Bermudas
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Accesorios">
            Accesorios
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
