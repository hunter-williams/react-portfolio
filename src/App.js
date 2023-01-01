// import classes from '*.module.css';

import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
  }
}

export default App;
