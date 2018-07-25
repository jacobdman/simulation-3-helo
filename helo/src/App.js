import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Routes from './routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='NavBox'><Nav /></div>
        <div className='RouteBox'>{Routes}</div>
      </div>
    );
  }
}

export default App;