import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
  }


  render() {
    return (
      <div>
      {/* setting up react router for easy navigation within the pages */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route  path="/home" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
