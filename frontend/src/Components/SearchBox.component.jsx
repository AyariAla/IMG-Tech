import React from 'react';

import { Form, Button } from 'react-bootstrap';
//  >  <
const SearchBox = ({ history }) => {
  return (
    <Form className='d-flex'>
      <Form.Control
        type='text'
        name='search'
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-4'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
