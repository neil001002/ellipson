import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="nav" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="nav-brand">Ellipson</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav w-25">
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link className="nav-link">Explore</Nav.Link>
              <Nav.Link className="nav-link">About</Nav.Link>
              <Nav.Link>
                <Button className="Btn">Connect Wallet</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <div>
          <h1>Some Text here</h1>
        </div>
        <Button className="Btn2">Create</Button>
      </section>
    </div>
  );
};

export default Home;
