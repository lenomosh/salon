import React from 'react'
import {Nav, Navbar } from "react-bootstrap";

export const NavbarComponent = () => {
    return (
      <Navbar fixed="top" className="purple accent-3" bg="purple" expand="lg">
        <Navbar.Brand href="#home">Urembo Salon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=" justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-5">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Portfolio
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Contacts
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Bookings
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Login/Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };


export default NavbarComponent
