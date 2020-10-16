import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import './styles.scss';

function App() {
  return (
    <div className='App'>
      <h1> Bubbles App</h1>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
          <PrivateRoute exact path='/bubble-page' component={BubblePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
