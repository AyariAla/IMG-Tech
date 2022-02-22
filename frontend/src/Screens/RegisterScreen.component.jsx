import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../Components/FormContainer.component';
import { register } from '../Redux/user/userActions'
import Message from '../Components/Message.component'
import Loader from '../Components/Loader.component'

//  >  <

const RegisterScreen = ({ location,history }) => {

  const [ name, setName] = useState('');
  const [ email, setEmail]= useState('');
  const [ password, setPasword] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');
  const [ message, setMessage ] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    if(userInfo){
      history.push(redirect)
    }
  },[history, userInfo, redirect])


  const submitHandler = (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      setMessage('Passwords do not match !');
    }else {
      dispatch(register(email,name,password))
    }
    console.log('Register log');
  };

  return (
    <FormContainer>
      <h1>SIGN UP</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      { loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e)=> setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' value={password} onChange={(e)=> setPasword(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
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
