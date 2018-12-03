import React from 'react'
import './footer.sass'
import facebook from 'images/facebook.png'
import twitter from 'images/twitter.png'
import instagram from 'images/instagram.png'
import pinterest from 'images/pinterest.png'
import whatsupp from 'images/whatsupp.png'

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="title_footer" >Dalton y Asesores</h2>
            <p className="text_footer">
                <span>
                    Contacto de información: <br />
                </span>
                <a href="mailto:contacto@dalton.com.co">
                    contacto@dalton.com.co <br />
                </a>
                <a href="mailto:desarrolloweb@dalton.com.co">
                    desarrolloweb@dalton.com.co
                </a>
            </p>
            <ul className="ulFooter">
                <li className="lifooter">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img className="imgfooter" src={facebook} alt="" />
                    </a>
                </li>
                <li className="lifooter">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img className="imgfooter" src={twitter} alt="" />
                    </a>
                </li>
                <li className="lifooter">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img className="imgfooter" src={instagram} alt="" />
                    </a>
                </li>
                <li className="lifooter">
                    <a href="https://co.pinterest.com/" target="_blank" rel="noopener noreferrer">
                        <img className="imgfooter" src={pinterest} alt="" />
                    </a>
                </li>
                <li className="lifooter">
                    <a href="https://api.whatsapp.com/send?phone=573186195438" target="_blank" rel="noopener noreferrer">
                        <img className="imgfooter" src={whatsupp} alt="" />
                    </a>
                </li>
            </ul>
            <p className="made-by-footer"> Made with <span role="img" aria-label="Heart Emoji">❤️</span> by Karol Gutierrez</p>
        </footer>
    )
}

export default Footer;