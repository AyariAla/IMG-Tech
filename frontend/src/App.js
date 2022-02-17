import React from 'react';
import LoginPage from './Pages/LoginPage.component';
import HomePage from './Pages/HomePage.component';
import RegisterPage from './Pages/RegisterPage.component';
import Header from './Components/Header.component';

import { Route, Switch } from 'react-router-dom';

//  >  <import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={LoginPage} />
          <Route path='/signup' component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
