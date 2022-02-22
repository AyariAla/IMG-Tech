import React from 'react';
import { Container } from 'react-bootstrap';
import LoginScreen from './Screens/LoginScreen.component';
import HomeScreen from './Screens/HomeScreen.component';
import RegisterScreen from './Screens/RegisterScreen.component';
import Header from './Components/Header.component';
import AdminScreen from './Screens/AdminScreen.component';
import CategoryForm from './Components/CategoryForm.component';
import ProductForm from './Components/ProductForm.component';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//  >  <import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/admin' component={AdminScreen} />
          <Route path='/category' component={CategoryForm} />
          <Route path='/product' component={ProductForm} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
