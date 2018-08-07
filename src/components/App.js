import React, { Component } from 'react';
import Demo from './Demo';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p> </p>
          <h1 className="App-title">Video Demo</h1>
        </header>
        <p className="App-intro">
        <Demo/>
        </p>
      </div>
    );
  }
}

export default App;