import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: #66bdea; /* University Light Blue */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f8d; /* Darker shade of blue */
  }
`

const Button = ({ to, children }) => {
  return <StyledButton to={to}>{children}</StyledButton>
}

export default Button
