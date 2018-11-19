import React, {Component} from 'react'

//import Mapa from 'images/map.jpg'
import './article.sass';

class ArticleServ extends Component {
    render() {
        const { title, text, image } = this.props
        return (
            <article className="article">
                <h2 className="title-article">{title}</h2>
                <img src={image} className="img-article" alt="" />
                <p className="text-article">{text}</p>
            </article>
        )
    }
}


export default ArticleServ;