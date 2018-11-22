import React from 'react'

import SubHeader from 'components/atoms/subHeader'
import Nav from 'components/atoms/nav'
import map from 'images/map.jpg'
import './header.sass';


const Header = () => {
    return(
        <header className="header">
            <Nav />
            <SubHeader 
                text="Creando el software  del presente para cambiar el mañana"
                title="Dalton y Asesores"
                image={map}
            />
        </header>
    )
}

export default Header;