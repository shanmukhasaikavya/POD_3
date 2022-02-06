import React,{useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (event) => {
     
      event.preventDefault();
      axios.post('http://localhost:8080/user/login',{email,password}).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    };
    return(
      <Container>
      <Row >
        <Col lg={6} md={6} sm={12} className='p-5 m-auto'>
          <h1 className='text-center text-white'><MdAccountCircle size={60} color='#8c14fc'/></h1>
          <h5 className='text-center'>Sign in</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Control  className="mb-3 p-3"
                type="email" 
                name='email' 
                placeholder='Enter email'
                required
                id="email"
                onChange={e=>setEmail(e.target.value)}
                value={email}
                />
                <Form.Control  className="mb-3 p-3"
                type="password" 
                name='password' 
                placeholder='Enter Password'
                required
                id="password"
                onChange={e=>setPassword(e.target.value)}
                value={password}
                />
                <Button className='w-100 p-3' type="submit" style={{backgroundColor:"#8c14fc"}}>Login</Button>
            </Form>
            <Row className='text-center m-2'>
              <Col><p>Create an account?<Link to="/register">Register</Link></p></Col>
              <Col><p><Link to="/forgotpassword">Fogot Password?</Link></p></Col>
            </Row>
         
        </Col>
      </Row>
      <Footer className="mt-5"/>
    </Container>
    )
   
};

export default Login;