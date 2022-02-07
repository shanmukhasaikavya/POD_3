import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
   
    } = useCart();
    if(isEmpty) return <h1>cart is empty ghadha</h1>
  return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <h5>Cart {totalUniqueItems} total items {totalItems}</h5>
                    <Table striped>
                        <tbody>
                        {items.map((item,index)=>(
                            <tr key={index}>
                                <td>
                                    <img src={item.image} style={{height:'6rem'}}/>
                                </td>
                                <td>{item.name} </td>
                                <td>Rs.{item.price} </td>
                                <td> Quantity ({item.quantity}) </td>
                                <td>
                                    <Button  className='btn btn-info ms-2' 
                                    onClick={()=>updateItemQuantity(item.id,item.quantity-1)}
                                    >-</Button>
                                    <Button className='btn btn-info ms-2'
                                    onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
                                    >+</Button>
                                    <Button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>Remove Item</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col className='col-auto ms-auto'>
                    <h2>Total Price $ {cartTotal}</h2>
                </Col>
                <Col className='col-auto'>
                    <Button className='btn btn-danger' onClick={()=>emptyCart()}>Clear cart</Button>
                </Col>
            </Row>

        </Container>
  )
};

export default Cart;