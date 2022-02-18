import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../Components/FormContainer.component';

//  >  <

const RegisterScreen = () => {
  const submitHandle = (event) => {
    event.preventDefault();
    console.log('Register log');
  };

  return (
    <FormContainer>
      <h2>SIGN UP</h2>
      <Form onSubmit={submitHandle}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          REGISTER
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account ?<Link to='/login'>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
