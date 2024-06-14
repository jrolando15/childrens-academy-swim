import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const NavbarContainer = styled.nav `
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`

const NavLink = styled(Link)`
  margin: 0 15px;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #66bdea;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:  #005f8d;
    color : #fff;
  }


  &.active {
    background-color: #005f8d;
    color: #fff;
  }
`

const Navbar = () => (
    <NavbarContainer>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/programs" activeClassName="active">Programs</NavLink>
      <NavLink to="/instructors" activeClassName="active">Instructors</NavLink>
      <NavLink to="/schedule" activeClassName="active">Schedule</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </NavbarContainer>
  )
  
  export default Navbar