import React, { Component } from 'react'
import './articleSoftware.sass';

class ArticleSofware extends Component {
    render() {
        const { title, text, iframe } = this.props
        return (
            <article className="articleSoftware">
                <h2 className="title-articleSoftware">{title}</h2>
                <div className="img-text-container-articleSoftware">
                    <div dangerouslySetInnerHTML={{ __html: iframe }} className="iframe-articleSoftware" />
                    <p className="text-articleSoftware">{text}</p>
                </div>
            </article>
        )
    }
}


export default ArticleSofware;