import React, {Component} from 'react'
import './articleSoftware.sass';

class ArticleSofware extends Component {
    render() {
        const { title, text, iframe } = this.props
        return (
            <article className="articleSoftware">
                <h2 className="title-articleSoftware">{title}</h2>
                <p className="text-articleSoftware">{text}</p>
                <div dangerouslySetInnerHTML={{__html: iframe}} className="img-articleSoftware"/>
            </article>
        )
    }
}


export default ArticleSofware;