import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../Components/FormContainer.component';

//  >  <

class HomePage extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('log in');
  };
  render() {
    return (
      <FormContainer>
        <h1>SIGN IN</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            SIGN IN
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            New Customer ? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </FormContainer>
    );
  }
}

export default HomePage;
