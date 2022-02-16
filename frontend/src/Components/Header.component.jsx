import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            IMAGE TECHNOLOGY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search Products ...'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              <i className='fas fa-shopping-cart'></i>
              CART
            </Nav.Link>

            <Nav.Link as={Link} to='/login'>
              SIGN IN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
/** 
 *               <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search Products ...'
                  className='me-2'
                  aria-label='Search '
                />
                <Button variant='outline-success'>Search </Button>
              </Form>
*/
