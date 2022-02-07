import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header1 = () => {
    return (
      <div>
     
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">
    <img
src="logo.png"
width="40"
height="40"
className="d-inline-block align-top rounded"

/>
</Navbar.Brand>
    
    <Navbar.Brand href="#home">Online Grocery Store</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="productcategory">Product Category</Nav.Link>
      <Nav.Link as={Link} to="mycart">My Cart</Nav.Link>
      <Nav.Link as={Link} to="myorders">My Orders</Nav.Link>
      <Nav.Link as={Link} to="messageus">Message Us</Nav.Link>
      <Nav.Link as={Link} to="changepassword">Change Password</Nav.Link>
      <Nav.Link as={Link} to="logout">Logout</Nav.Link>
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>


    </Container>
  </Navbar>


 

</div>
)
};
export default Header1;