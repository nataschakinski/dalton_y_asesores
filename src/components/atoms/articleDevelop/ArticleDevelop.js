import React, {Component} from 'react'
import './articleDevelop.sass'

class ArticleDevelop extends Component {
    render() {
        const { text, image } = this.props
        return (
            <article className="articleDevelop">
                <img src={image} className="img-articleDevelop" alt="" />
                <p className="text-articleDevelop">{text}</p>
            </article>
        )
    }
}


export default ArticleDevelop;