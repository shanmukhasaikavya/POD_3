import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
return (
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand as={Link} to="/">
<img
src="logo.png"
width="40"
height="40"
className="d-inline-block align-top rounded"

/>
Online Grocery Store
</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link as={Link} to="about">About</Nav.Link>
<Nav.Link as={Link} to="login">Login</Nav.Link>
<Nav.Link as={Link} to="register">Register</Nav.Link>
</Nav>
</Container>
</Navbar>
)
};
export default Header;