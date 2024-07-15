"use client";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navi = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      bg="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/" className="fs-4">{`< SG >`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-5">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Skills">SKills</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
