import React, { Component } from 'react'
import './articleVirtual.sass';

class ArticleVirtual extends Component {
    render() {
        const { text, iframe, isInverse, image } = this.props
        const classNames = isInverse ? "articleVir isInverse" : "articleVir"
        const iframeClassNames = isInverse ? "img-articleVir rotateRight" : "img-articleVir rotateLeft"
        return (
            <article className={classNames}>
                {
                    image
                        ? <img src={image} className="img-articleVir" alt="" />
                        : <div dangerouslySetInnerHTML={{ __html: iframe }} className={iframeClassNames} />
                }
                <p className="text-articleVir">{text}</p>
            </article>
        )
    }
}


export default ArticleVirtual;