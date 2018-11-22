import React, { Component } from 'react'
import './articleAsesorias.sass'


class ArticleAsesorias extends Component {
    render() {
        const { title, text } = this.props
        return (
            <article className="articleAsesorias">
                <h2 className="title-articleAsesorias">{title}</h2>
                <p className="text-articleAsesorias">{text}</p>
            </article>
        )
    }
}


export default ArticleAsesorias;