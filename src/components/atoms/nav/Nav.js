import React from 'react'
import DaltonImage from 'images/Dalton.png'
import './nav.sass'

const Nav = ({title, image, text}) => {
    return (
        <nav className="nav">
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