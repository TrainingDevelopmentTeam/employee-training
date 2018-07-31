import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        {/* <header className="App-header">
          <h1 className="App-title">Employee Training and Development</h1>
        </header> */}

        <Navigation />

      </div>
    );
  }
}

export default App;
