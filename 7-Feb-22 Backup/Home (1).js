import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import { products } from "../data/products";
const Home = () => {
  const [data, setData] = useState(products);

  const handleChanged = (cartItem) => {
    const result = products.filter((curdata) => {
      return curdata.category === cartItem;
    });
    setData(result);
    console.log(data);
  };

  
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3} md={6}>
          <h3 style={{ color: "black", marginBottom: "20px" }}>
            Categories of Products
          </h3>
          <Button className="btn btn-secondary w-100 mb-4" onClick={()=>setData(products)}>All</Button>
          <Button
            className="btn btn-warning w-100 mb-4"
            onClick={() => handleChanged("vegetable")}
          >
            Vegetables
          </Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("fruit")}>Fruits</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Dairy and Backery")}>Dairy and Bakery</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Snacks and Branded Foods")}>Snacks and Branded Foods</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Beverages")}>Beverages</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Personal Care")}>Personal Care</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Home Care")}>Home Care</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Baby Care")}>Baby Care</Button>
          <Button className="btn btn-warning w-100 mb-4" onClick={() => handleChanged("Home and Kitchen")}>Home and Kitchen</Button>
        </Col>
        <Col lg={9}>
          <img className="img-fluid" src="freshveg.PNG" alt="name"></img>
          <Row>
          {data.map(item=>(
            <ProductCard products={item}/>
          ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;