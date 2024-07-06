import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Navbar, Nav, Container } from 'react-bootstrap'

const StyledNavbar = styled(Navbar)`
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`

const StyledNavLink = styled(Nav.Link)`
  margin: 0 15px;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #66bdea !important;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f8d;
    color: #fff !important;
  }

  &.active {
    background-color: #005f8d;
    color: #fff !important;
  }
`

const NavbarComponent = () => (
  <StyledNavbar expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <StyledNavLink as={Link} to="/" activeClassName="active">Home</StyledNavLink>
          <StyledNavLink as={Link} to="/programs" activeClassName="active">Programs</StyledNavLink>
          <StyledNavLink as={Link} to="/instructors" activeClassName="active">Instructors</StyledNavLink>
          <StyledNavLink as={Link} to="/schedule" activeClassName="active">Schedule</StyledNavLink>
          <StyledNavLink as={Link} to="/contact" activeClassName="active">Contact</StyledNavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </StyledNavbar>
)

export default NavbarComponent
