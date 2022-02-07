import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header1 = () => {
    return (
      <div>
     
     
     <Navbar bg="dark" variant="dark">
    <Container>

    <img
src="logo.png"
width="40"
height="40"
className="d-inline-block align-top rounded"

/>
    
    <Navbar.Brand href="#home">Online Grocery Store</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#productcategory">Product Category</Nav.Link>
      <Nav.Link href="#mycart">My Cart</Nav.Link>
      <Nav.Link href="#myorders">My Orders</Nav.Link>
      <Nav.Link href="#messageus">Message Us</Nav.Link>
      <Nav.Link href="#changepassword">Change Password</Nav.Link>
      <Nav.Link href="#logout">Logout</Nav.Link>
    </Nav><Form className="d-flex">
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