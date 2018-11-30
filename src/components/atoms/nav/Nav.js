import React from 'react'
import './nav.sass'

const Nav = ({ title, image, text }) => {

    function onHandleClikNav(event, id) {
        window.location.hash = `#${id}`;
    }

    return (
        <nav className="nav">
            <img src="" />
            <ul className="ulNav">
                <li className="liNav" onClick={(event) => onHandleClikNav(event, "servicios")}>Servicios</li>
                <li className="liNav" onClick={(event) => onHandleClikNav(event, "asesorias")}>Asesoria Empresarial</li>
                <li className="liNav" onClick={(event) => onHandleClikNav(event, "recorridos_virtuales")}>Recorrido virtual</li>
                <li className="liNav" onClick={(event) => onHandleClikNav(event, "software_administrativo")}>Software administrativo</li>
                <li className="liNav" onClick={(event) => onHandleClikNav(event, "desarrollo_de_software")}>Desarrollo Web</li>
                <li className="liNav" onClick={(event) => onHandleClikNav(event, "tarifas")}>Tarifas</li>
                <li className="liNav" onClick={(event) => onHandleClikNav(event, "tutoriales")}>Tutoriales</li>
                <li className="liNav" onClick={() => { }}>Contactenos</li>
            </ul>
        </nav>
    )
}







export default Nav;