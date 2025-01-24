import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarMobile = () => {
  return (
    <Navbar className="bg-primary border border-primary">
      <Container>
        <Navbar.Brand href="/ ">Navigation: </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ "> Home </Nav.Link>
            <Nav.Link href="/About"> About </Nav.Link>
            <Nav.Link href="/Resume"> Resume </Nav.Link>
            <Nav.Link href="/Portfolio"> Portfolio </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMobile;
