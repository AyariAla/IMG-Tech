import React from 'react';
import SideBar from '../Components/SideBar.component';
import ProductForm from '../Components/ProductForm.component';
import { Container, Col, Row } from 'react-bootstrap';

const AdminScreen = () => {
  return (
    <Container>
      <Row>
        <Col xs={4} lg={4}>
          <SideBar />
        </Col>
        <Col xs={8} lg={8}>
          <ProductForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;
