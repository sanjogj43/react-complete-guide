/*jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is react app</h1>
        <Person/>
      </div>
    );
  }
}

export default App;
