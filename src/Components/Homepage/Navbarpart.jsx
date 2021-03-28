import React from 'react';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import './headstyle.css';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';


const Navbarpart = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Navbar.Brand href="#home"><span className="tex-success">Tour</span> App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link ><Link className="text-white" to="/">Home</Link></Nav.Link>      
      <Nav.Link><Link className="text-white" to="/aboutus">About us</Link></Nav.Link>
      <Nav.Link><Link className="text-white" to="/blogpost">Blog</Link></Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
         <NavDropdown.Item href="#action/3.1"><Link to="/whatTodo">What To do</Link></NavDropdown.Item>
        
        <NavDropdown.Item href="#action/3.2"><Link to="/timeline">Time Line</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><Link to="/favplace">Favourite Places</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><Link to="/todo">Plan To Do</Link></NavDropdown.Item>       
        <NavDropdown.Item href="#action/3.4"><Link to="/contactus">Contact Us</Link></NavDropdown.Item>
      
      </NavDropdown>
    </Nav>
    <Nav>
    <Nav.Link eventKey={2} href="#memes">
      <Badge badgeContent={4} color="secondary">
      <NotificationsIcon className="text-white"></NotificationsIcon>

    </Badge>
     </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       <NavDropdown title="Login" id="collasible-nav-dropdown">      
          <NavDropdown.Item href="http://localhost:8000/admin/login/?next=/admin/">User</NavDropdown.Item>
          <NavDropdown.Item > <Link to="/signup">Sign up</Link></NavDropdown.Item>
        
        <NavDropdown.Item href="http://localhost:8000/admin/logout/">Logout</NavDropdown.Item>
          
      </NavDropdown>  
        </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Navbarpart;