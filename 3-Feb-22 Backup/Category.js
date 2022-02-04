import { ListGroup } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Category= () => {
    return (
  
<Container className="mt-5">

<Row>
<Col xs={3} >
<ListGroup className="category">
  <ListGroup.Item >Category</ListGroup.Item>
  <ListGroup.Item variant="primary">Vegetables</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Fruits
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
  Dairy and Bakery
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
  Snacks and Branded Foods
  </ListGroup.Item>
  <ListGroup.Item action variant="warning">
  Beverages
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
  Personal Care
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
  Home Care
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
  Baby Care
  </ListGroup.Item>
  <ListGroup.Item action variant="warning">
  Home and Kitchen
  </ListGroup.Item>
</ListGroup>

</Col>



<Col xs={3}  >

<img
 src="freshveg.PNG"
 width="1100"
 height="180"
></img>
  
</Col>

<Col>

</Col>

</Row>


</Container>
)
};
export default Category;