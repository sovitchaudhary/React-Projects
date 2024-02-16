import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import movies from './movie.json';
import './App.css';
import './Mycss.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          {
            movies.map((element) => {
              return (
                <Movie
                 title={element.Title}
                 year={element.Year}
                 img={element.Poster}
              />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
