import React from 'react'
import { Nav, Navbar, Container, Button, NavDropdown  } from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div`
Nav{



    font-weight: 500;
    font-style: underlined;
    

}


.navbar-brand, .navbar-nav .nav-link {
  color: black;
  text-decoration-line: underline;
  &:hover {
    color: blue;
  }
}
Button {
  letter-spacing: 4px;
  font-weight: bold;
}

`;





export const Navigationbar = () => {
  return (
    <Styles>
    <Navbar expand="lg">

      <Container fluid>
        <Navbar.Brand smooth to="#home"><img
              src={require('../assets/logo.jpg')}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/home" >Home</Nav.Link>
            <Nav.Link to="/about" >About Us</Nav.Link>
            <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
            <NavDropdown.Item to="/gallery" >Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#" >Weddings</NavDropdown.Item>
              <NavDropdown.Item href="#" >
                Pre-Nups
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Button variant="outline-primary">Contact Us</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Styles>
  )
  
}


 