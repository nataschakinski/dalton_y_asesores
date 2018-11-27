import React from 'react'
import DaltonImage from 'images/Dalton.png'
import './nav.sass'
import SectionServices from 'components/molecules/services'
import VirtualSection from 'components/molecules/virtualSection'
import SectionAsesorias from 'components/molecules/asesorias'
import SoftwareAdmon from 'components/molecules/softwareadmon'
import DevelopSection from 'components/molecules/develop'
import TarifasSection from 'components/molecules/tarifas'
import Footer from 'components/molecules/footer'
import TutorialesSection from 'components/molecules/tutoriales'


//const clicknav =document.getElementsByClassName("clicknav")
const Nav = ({title, image, text}) => {
   // clicknav.addEventListener("click", function(event)){
    return (
        <nav className="nav">..  
            <img src="" />
            <ul className="ulNav">
                <li className="liNav">Servicios</li>
                

                <li className="liNav">Asesoria Empresarial</li>
                <li className="liNav">Recorrido virtual</li>
                <li className="liNav">Software administrativo</li>
                <li className="liNav">Desarrollo Web</li>
                <li className="liNav">Tarifas</li>
                <li className="liNav">Tutoriales</li>
                <li className="liNav">Contactenos</li>
            </ul>            
            </nav>
        )
    }

    
    


   

export default Nav;