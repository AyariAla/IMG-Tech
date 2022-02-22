import React, { useState } from 'react';
import FormContainer from '../Components/FormContainer.component';
import { Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Add product log');
  };

  return (
    <FormContainer>
      <h1>Product </h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='quantity'>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type='text'
            placeholder='Quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Add Product
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProductForm;
