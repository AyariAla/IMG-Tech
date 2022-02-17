import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormContainer from '../Components/FormContainer.component';
import { signIn } from '../Redux/user/userActions';

//  >  <

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { loading, error, useInfo } = userSignIn;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('log in');
    dispatch(signIn(email, password));
  };
  return (
    <FormContainer>
      <h1>SIGN IN</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          SIGN IN
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer ? <Link to='/signup'>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
