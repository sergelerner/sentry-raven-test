import React, { Component } from 'react';
import Raven from 'raven-js';
import logo from './logo.svg';
import './App.css';


Raven
  .config('https://819e0d4d48d14194ac38a29ca72488e1@sentry.io/102888')
  .install();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
