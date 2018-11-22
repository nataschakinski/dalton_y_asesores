import React, {Component} from 'react'
import './articleVirtual.sass';
import {Map , InfoWindow , Marker,GoogleApiWrapper} from 'google-maps-react'

class ArticleVirtual extends Component {
    render() {
        const { text, iframe, isInverse, image } = this.props
        const classNames = isInverse ? "articleVir isInverse" : "articleVir" 
        return (
            <article className={classNames}>
                {
                    image 
                    ? <img src={image} className="img-articleVir" alt=""/>
                    : <div dangerouslySetInnerHTML={{__html: iframe}} className="img-articleVir"/>
                }
                <p className="text-articleVir">{text}</p>
            </article>
        )
    }
}


export default ArticleVirtual;