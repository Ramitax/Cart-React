import React, { Fragment } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Products</Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
