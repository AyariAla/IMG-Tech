import React from 'react';
import { Container } from 'react-bootstrap';
import LoginScreen from './Screens/LoginScreen.component';
import HomeScreen from './Screens/HomeScreen.component';
import RegisterScreen from './Screens/RegisterScreen.component';
import Header from './Components/Header.component';

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
        </Container>
      </main>
    </Router>
  );
};

export default App;
