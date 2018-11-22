import React, {Component} from 'react'

//import Mapa from 'images/map.jpg'
import './articleTarifas.sass';

class TarifasArticle extends Component {
    render() {
        const { title, text, image } = this.props
        return (
            <article className="articleTarifas">
                <h2 className="title-articleTarifas">{title}</h2>
                <img src={image} className="img-articleTarifas" alt="" />
                <p className="text-articleTarifas">{text}</p>
            </article>
        )
    }
}


export default TarifasArticle;