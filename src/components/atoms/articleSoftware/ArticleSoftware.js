import React, {Component} from 'react'
import './articleSoftware.sass';

class ArticleSofware extends Component {
    render() {
        const { title, text, image } = this.props
        return (
            <article className="articleSoftware">
                <h2 className="title-articleSoftware">{title}</h2>
                <img src={image} className="img-articleSoftware" alt="" />
                <p className="text-articleSoftware">{text}</p>
            </article>
        )
    }
}


export default ArticleSofware;