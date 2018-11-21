import React, {Component} from 'react'
import './articleVirtual.sass';
import {Map , InfoWindow , Marker,GoogleApiWrapper} from 'google-maps-react'

class ArticleVirtual extends Component {
    render() {
        const { text, image, texto,imagen } = this.props
        return (
            <article className="articleVir">
                <img src={image} className="img-articleVir" alt="" />
                <p className="text-articleVir">{text}</p>
                <p className="text-articleVir">{texto}</p>
                <img src={imagen} className="img-articleVir" alt="" />
            </article>
        )
    }
}


export default ArticleVirtual;