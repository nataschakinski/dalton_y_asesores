import React, { Component } from 'react';
import logo from './logo.svg';
import Header from 'components/molecules/header'
import './App.css';
import SectionServices from 'components/molecules/services'



//import Mapa from 'images/map.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionServices/>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/506LYvmIAPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        
      </div>
    )
  }
}

export default App;

