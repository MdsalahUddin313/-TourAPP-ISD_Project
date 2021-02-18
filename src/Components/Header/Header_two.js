import React from 'react';
import {Form,Navbar,Nav,Col,NavDropdown,Row,Container,Button,Card} from 'react-bootstrap';

const Header_two = () => {

   const navbar_style={position:"fixed",top:"0",width:"100%", overflow:"hidden"}
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/aboutus">About</Nav.Link>
      <Nav.Link href="/hotels">Hotels</Nav.Link>
      <Nav.Link href="/transports">Transport</Nav.Link>
      <Nav.Link href="/blogs">Blogs</Nav.Link>
      <Nav.Link href="/contactus">Contact us</Nav.Link>


      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header_two;