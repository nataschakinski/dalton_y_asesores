import React from 'react'

import SubFooter from 'components/atoms/subFooter'
import './footer.sass';


const Footer = () => {
    return(
        <footer className= "footer">
            <p className= "title_footer" >Dalton y Asesores</p>
            <p className= "text_footer">Contacto de información: <a href="mailto:someone@example.com">
            contacto@dalton.com.co <br/>
            desarrolloweb@dalton.com.co</a>.</p>
        </footer>
    )
}

export default Footer;