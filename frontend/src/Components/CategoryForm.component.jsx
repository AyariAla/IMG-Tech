import React, { useState } from 'react';
import FormContainer from '../Components/FormContainer.component';
import { Form, Button } from 'react-bootstrap';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Add Category log');
  };
  return (
    <FormContainer>
      <h1>Category </h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Category name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter category name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='price'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Add Category
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CategoryForm;
