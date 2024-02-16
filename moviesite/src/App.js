import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css';
import './Mycss.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <Movie />
        </div>
      </div>
    );
  }
}

export default App;
