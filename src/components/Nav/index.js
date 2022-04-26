import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        {/* Logo/Link to home page */}
        <Navbar.Brand as={Link} to="/">
          <span className="navTextName mx-5 text-color">Aaron Humelsine</span>
        </Navbar.Brand>
        {/* Mobile ability to access Navbar */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* All page links below */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              <span className="navText mx-3 text-color">About</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <span className="navText mx-3 text-color">Contact</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/project">
              <span className="navText mx-3 text-color">Portfolio</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              <span className="navText mx-3 text-color">Resume</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
