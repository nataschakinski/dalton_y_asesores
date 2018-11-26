import React from 'react'
import SubFooter from 'components/atoms/subFooter'
import './footer.sass'
import logoface from 'images/logoface.png'
import instagram from 'images/instagram.jpg'
import logotwitter from 'images/logotwitter.png'
import pinterestlogo from 'images/pinterestlogo.jpg'

const Footer = () => {
    return(
        <footer className= "footer">
            <p className= "title_footer" >Dalton y Asesores</p>
            <p className= "text_footer">Contacto de información: <a href="mailto:someone@example.com">
            contacto@dalton.com.co <br/>
            desarrolloweb@dalton.com.co</a>.</p>
            <ul className="ulNav">
                <li className="lifooter">
                    <img className="imgfooter" src={logoface} alt=""/>  
                    <a href="https://www.facebook.com/"></a>
                </li>
                <li className="lifooter">
                    <a href="https://twitter.com/"></a>
                    <img className="imgfooter" src={logotwitter} alt=""/>
                </li>
                <li className="lifooter">
                    <a href="https://www.instagram.com/"></a>
                    <img className="imgfooter" src={instagram} alt=""/>
                </li>
                <li className="lifooter">
                    <a href="https://co.pinterest.com/"></a>
                    <img className="imgfooter" src={pinterestlogo} alt=""/>
                </li>
            </ul>            
        </footer>
    )
}

export default Footer;