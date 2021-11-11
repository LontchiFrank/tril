import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
function Navig1() {
  return (
    <div style={{ padding: 0 }}>
      <Navbar
        className="pb-0"
        style={{
          position: "fixed",
          width: "100vw",
          marginLeft: "0px",
          color: "black",
          //   background: "teal",
          zIndex: 6,
        }}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container className="narbar-active">
          <Link
            to="/"
            className="d-flex justify-content-center align-items-center"
          >
            <Navbar.Brand href="#home">
              <div className="logo-hold1  ">
                {/* <img src={logo} alt="" className="logo" /> */}
              </div>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#how it works">How It Works</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#top rated">Top Rated Advertisers</Nav.Link>
              {/* <Nav.Link href="#deets">Contacts</Nav.Link> */}
              <Nav.Link href="#testimonies">Testimonies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navig1;
