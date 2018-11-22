import React, { Component } from 'react';
import logo from './logo.svg';
import Header from 'components/molecules/header'
import './App.css';
import SectionServices from 'components/molecules/services'
import VirtualSection from 'components/molecules/virtualSection'
import SectionAsesorias from 'components/molecules/asesorias'
import SoftwareAdmon from 'components/molecules/softwareadmon'
import DevelopSection from 'components/molecules/develop'



//import Mapa from 'images/map.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionServices/>
        <SectionAsesorias/>
        <VirtualSection/>
        <SoftwareAdmon/>
        <DevelopSection/>
        
        {/*<iframe src="https://www.google.com/maps/embed?pb=!4v1542899603448!6m8!1m7!1sCAoSLEFGMVFpcE5SR1pVbjVmS1lDaDNxSEpHbkJqdVEybDdUWi0wclpYSmtXczJ1!2m2!1d4.120208596560055!2d-73.61611946498748!3f193.7926176376239!4f-0.8075880309457943!5f0.7820865974627469" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        {/* <iframe width="560" height="315" src="https://youtu.be/HAglNnUnMxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
    )
  }
}


export default App;

