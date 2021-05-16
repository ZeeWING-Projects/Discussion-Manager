import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import LoginToAccount from './LoginToAccount'
import SinUpToAccount from './SinUpToAccount'
import {Route,Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,button} from 'react-bootstrap'
import Avatar from 'react-avatar';
import styles from './mystyle.module.css'; 
function WebMainHomePageNavBar()
{
    return(

    <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Navbar.Brand href="#home"><div className={styles.navBrand}>Discussion Manager</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <Nav>
            
            
            <Nav.Item><button type="button" class="btn btn-outline-light mr-2" to="/webMainHomePage">About</button></Nav.Item>  
            <Nav.Item><button type="button" class="btn btn-outline-light mr-2" to="/webMainHomePage">Get App</button></Nav.Item>  
            <Nav.Item><button type="button" class="btn btn-outline-light mr-2" to="/webMainHomePage"> Forum</button></Nav.Item>  
            <Nav.Item><SinUpToAccount  buttonLabel="Create Account" type="NavBar"/></Nav.Item>
            <Nav.Item><LoginToAccount  buttonLabel="Login" type="NavBar"/></Nav.Item>
            
            
            
            
            <Nav.Item><Avatar name="Zeeshan" size="40" /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default WebMainHomePageNavBar