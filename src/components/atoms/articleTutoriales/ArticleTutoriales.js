import React, { Component } from 'react'
import './articleTutoriales.sass';

class ArticleTutoriales extends Component {
    render() {
        const { title, text, iframe } = this.props
        return (
            <article className="articleTutoriales">
                <h2 className="title-articleTutoriales">{title}</h2>
                <div className="img-text-container-articleTutoriales">
                    <div dangerouslySetInnerHTML={{ __html: iframe }} className="iframe-articleTutoriales" />
                    <p className="text-articleTutoriales">{text}</p>
                </div>
            </article>
        )
    }
}


export default ArticleTutoriales;