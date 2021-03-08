import React from 'react';
import {Form,Navbar,Nav,Col,NavDropdown,Row,Container,Button,Card} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Header_two = () => {

   const navbar_style={position:"fixed",top:"0",width:"100%", overflow:"hidden"}
    const link_style={textDecoration:"none",color:"white"}
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link  ><Link style={link_style} to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link style={link_style} to="/aboutus">About</Link></Nav.Link>
      <Nav.Link ><Link style={link_style} to="/hotels">Hotels</Link></Nav.Link>
      <Nav.Link ><Link style={link_style} to="/transports">Transport</Link></Nav.Link>
      <Nav.Link ><Link style={link_style} to="/blogs">Blogs</Link></Nav.Link>
      <Nav.Link ><Link style={link_style} to="/contactus">Contact us</Link></Nav.Link>


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