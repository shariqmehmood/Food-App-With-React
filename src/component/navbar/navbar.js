import  React from "react";
import "./navbar.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


function Nabar(){
    return(
      <>
     
     <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Food App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     <Nav.Link ><Link className="link" to="/Signup" >Signup</Link></Nav.Link>
      <Nav.Link >Pricing</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} >
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    
     
    </>
  


      
    )
}


export default Nabar;