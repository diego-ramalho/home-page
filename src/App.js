import logo from './logo.svg';
import { Row, Col, Button, Navbar, Nav, Container, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';

export function AppNav() {
  return (
    <Navbar className="custom-nav" collapseOnSelect expand="md" variant="dark">
    <Container>
    <Navbar.Brand href="#home">LandingPage</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Nav.Link href="#link01">Link 01</Nav.Link>
        <Nav.Link eventKey={2} href="#link02">Link 02</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export function CentralBannerSection() {
  return (
    <div className="central-banner-section">
      Central Banner
    </div>
  );
}

export function LeftSection() {
  return (
    <div className="left-section">
      Left
    </div>
  );
}

export function RightSection() {
  return (
    <div className="right-section">
      Right
    </div>
  );
}

export function FooterSection() {
  return (
    <div className="footer-section">
      Footer
    </div>
  );
}

export function App() {
  return (
    <div className="Content">
      <Row>
        <Col md={12}><CentralBannerSection /></Col>
      </Row>
      <Row>
        <Col md={3}><LeftSection /></Col>
        <Col md={9}><RightSection /></Col>
      </Row>
      <Row>
        <Col md={12}><FooterSection /></Col>
      </Row>
    </div>
  );
}

export default App;
