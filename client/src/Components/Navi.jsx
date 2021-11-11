import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navi() {
  return (
    <div style={{ padding: 0 }}>
      <Navbar
        style={{
          position: "fixed",
          width: "100vw",
          marginLeft: "0px",
          background: "teal",
          zIndex: 6,
        }}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container className="narbar-active">
          <Link
            to="/"
            className="d-flex justify-content-center align-items-center"
          >
            <Navbar.Brand href="#home">
              <div className="logo-hold  ">
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

export default Navi;
