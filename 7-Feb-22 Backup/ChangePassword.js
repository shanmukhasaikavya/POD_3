import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';




export const ChangePassword = () => {
  return <div>
      <Container>
      <Row >
        <Col lg={6} md={6} sm={12} className='p-5 m-auto'>
          <h1 className='text-center text-white'></h1>
          <h5 className='text-center'>Change Password</h5>
            <Form>
              <Form.Control  className="mb-3 p-3"
                type="oldpass" 
                name='oldpass' 
                placeholder='Old Password'
                required
                id="oldpass"
               
                />
                <Form.Control  className="mb-3 p-3"
                type="newpass" 
                name='newpass' 
                placeholder='New Password'
                required
                id="newpass"
                
                />

<Form.Control  className="mb-3 p-3"
                type="cnfpass" 
                name='cnfpass' 
                placeholder='Confirm Password'
                required
                id="cnfpass"
                
                />
                <Button className='w-100 p-3' type="submit" style={{backgroundColor:"#8c14fc"}}>Save</Button>
            </Form>
         
        </Col>
      </Row>
     
    </Container>
  </div>;
};

   

export default ChangePassword;