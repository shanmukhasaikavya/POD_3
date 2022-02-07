import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const ProductCard = ({products}) => {
  const {addItem}=useCart();
  return (
    <>
      <Card style={{width:"18rem"}} key={products.name}>
        <Card.Img variant="top" src={products.image}/>
        <Card.Footer className="text-muted">
          <Card.Title>{products.name}</Card.Title>
          <Card.Title>Rs.{products.price}</Card.Title>
          <Button variant="success" onClick={()=>addItem(products)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default ProductCard;