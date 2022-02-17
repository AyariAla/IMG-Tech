import React from 'react';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { signout } from '../Redux/user/userActions';

import { useDispatch, useSelector } from 'react-redux';
import SearchBox from './SearchBox.component';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const signoutHandler = () => {
    dispatch(signout);
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnselect>
        <Container>
          <Navbar.Brand
            as={Link}
            to='/'
            className='d-flex justify-content-start'
          >
            IMAGE TECHNOLOGY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <SearchBox className='d-flex justify-content-between' />
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                <i className='fas fa-shopping-cart'></i>
                CART
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item as={Link} to='/profile'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={signoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to='/signin'>
                  <i className='fas fa-user'></i>
                  Sign In
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminMenu'>
                  <NavDropdown.Item as={Link} to='/admin/productList'>
                    Products
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
/** 
 *               <Navbar bg='dark' variant='dark' expand='lg'>
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
              <i className='fas fa-user'></i>
              SIGN IN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
*/
