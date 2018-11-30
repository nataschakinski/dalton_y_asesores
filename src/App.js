import React, { Component } from 'react';
import Header from 'components/molecules/header'
import './App.css';
import SectionServices from 'components/molecules/services'
import VirtualSection from 'components/molecules/virtualSection'
import SectionAsesorias from 'components/molecules/asesorias'
import SoftwareAdmon from 'components/molecules/softwareadmon'
import DevelopSection from 'components/molecules/develop'
import TarifasSection from 'components/molecules/tarifas'
import Footer from 'components/molecules/footer'
import TutorialesSection from 'components/molecules/tutoriales'


//import Mapa from 'images/map.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionServices />
        <SectionAsesorias />
        <VirtualSection />
        <SoftwareAdmon />
        <DevelopSection />
        <TarifasSection />
        <TutorialesSection />
        <Footer />
      </div>
    )
  }
}


export default App;

