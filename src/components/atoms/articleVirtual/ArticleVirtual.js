import React, {Component} from 'react'
import './articleVirtual.sass';

class ArticleVirtual extends Component {
    render() {
        const { title, text, image } = this.props
        return (
            <article className="articleVir">
                <h2 className="title-articleVir">{title}</h2>
                <img src={image} className="img-articleVir" alt="" />
                <p className="text-articleVir">{text}</p>
            </article>
        )
    }
}


export default ArticleVirtual;