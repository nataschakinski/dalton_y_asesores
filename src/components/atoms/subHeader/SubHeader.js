import React from 'react'
import './subHeader.sass'

const subHeaderBackGroundStyle = (image) => {
    const style = {
        background: ` linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63) ), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return style;
}

const SubHeader = ({title, image, text}) => {
    return (
        <section style={subHeaderBackGroundStyle(image)} className="subHeader">
            <h1 className="subHeader__title">{title}</h1>
            <p className="subHeader__paragraph">{text}</p>
        </section>
    )
}

export default SubHeader;