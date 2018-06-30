import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {process.env.REACT_APP_API_URL}
      </div>
    );
  }
}

export default App;
